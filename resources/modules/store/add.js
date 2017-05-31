//增减积分
require(["jquery", "util", "Ajax", "Vue", "EasyDropdown", "layer"], function($, Util, Ajax, Vue, EasyDropdown, layer) {
	//获取参数
	var card_no = Util.Request("card_no"),
		type = Util.Request("type"),
		//1为增加积分,2为减少积分
		projectType = {
			1: ["消费", "奖励", "其他"],
			2: ["退货", "兑换", "其他"]
		},
		pageData = {
			type: type,
			storeList: [], //商店列表
			projectList: projectType[type], //项目列表
			form: "", //会员信息
			submitForm: {
				project_name: projectType[type][0], //项目名
				shop_store: "" //商铺名称
			} //增减积分提交的表单
		}
		/**
		 * @desc 初始化页面对象
		 */
	var initModel = function() {
			//商店列表和会员信息都一就绪的情况下初始化页面对象
			if(pageData.storeList.length == 0 || !pageData.form) {
				return false;
			}
			vModel = new Vue({
				el: "#form",
				data: pageData,
				methods: {
					//效验积分
					validateIntegral: function() {
						var value = vModel.$data.submitForm.integral;
						var regReg = /[^0-9]/;
						if(!value) {
							return '';
						}
						if(regReg.test(value)) {
							layer.msg('积分必须为正整数');
							vModel.$data.submitForm.integral = '';
						}
					},
					//效验金额
					validateMoney: function() {
						vModel.$data.submitForm.money = vModel.$data.submitForm.money.replace(/[^0-9.]/g, '');
					}
				},
				ready: function() {
					//dom渲染完成后回调
					$("#store").easyDropDown({
						"cutOff": 5,
						onChange: function(obj) {
							vModel.submitForm.shop_store = obj.value;
						}
					});
					$("#project").easyDropDown({
						"cutOff": 5,
						onChange: function(obj) {
							var val = obj.value;
							vModel.submitForm.project_name = val;
							//切换项目清空积分和金额的值
							vModel.submitForm.money = "";
							vModel.submitForm.integral = "";
						}
					});
				}
			});
		}
		//获取会员信息
	Ajax.request('member/getMemberInfoByCondition', {
		'card_no': card_no
	}, function(rep) {
		//显示会员信息
		pageData.form = rep.result;
		initModel();
	});
	//加载所有店铺信息
	Ajax.request('store/queryStoreList', {}, function(rep) {
		pageData.storeList = rep.result;
		pageData.submitForm.shop_store = rep.result[0] || "";
		initModel();
	});
	//编辑
	$(".js-submit").click(function(){
		var submitData = $.extend({}, vModel.submitForm);
		if(submitData.money){
			submitData.integral = Math.floor(money);
		}
		if(type == 2) {
			submitData.integral = 0 - submitData.integral;
		}
		//增减积分
		Ajax.request('member/addIntegral', submitData, function(rep) {
			layer.msg("编辑积分成功!");
			setTimeout(function() {
				window.parent && window.parent.location.reload();
			}, 2000);
		});
	});
});