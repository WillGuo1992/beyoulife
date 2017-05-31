//增减积分
require(["jquery", "util", "Ajax", "Vue", "EasyDropdown", "layer", "jquery.validate"], function($, Util, Ajax, Vue, EasyDropdown, layer, Validate) {
	var realNameObj = Util.Request("obj");
	realNameObj = realNameObj === 'null' ? '' : JSON.parse(decodeURIComponent(realNameObj));
	pageData = {
			form: realNameObj || {
				sex: "1",
				phone: "",
				cardtype: "身份证",
				realname: "",
				idcard: ""
			}
		}
		/**
		 * @desc 初始化页面对象
		 */
	var initModel = function() {
			vModel = new Vue({
				el: "#form",
				data: pageData,
				methods: {

				},
				ready: function() {
					//dom渲染完成后回调
					$("#caradtype").easyDropDown({
						"cutOff": 5,
						onChange: function(obj) {
							vModel.form.cardtype = obj.value;
							vModel.form.idcard = "";
						}
					});
					$("#sex").easyDropDown({
						"cutOff": 5,
						onChange: function(obj) {
							var val = obj.value;
							vModel.form.sex = val;
						}
					});
					//选择默认值
					this.sex && $("#sex").easyDropDown("select", this.sex);
					this.caradtype && $("#caradtype").easyDropDown("select", this.caradtype);
				}
			});
		}
		/**
		 * @desc 绑定数据效验
		 */
	var bindValidate = function() {
			$.validator.addMethod("idcard", function(value, element) {
				if(vModel.form.cardtype == '身份证') {
					return this.optional(element) || Base.Reg['idcard'].test(value);
				}
				if(vModel.form.cardtype == '护照') {
					var re1 = /^[a-zA-Z]{5,17}$/;
					var re2 = /^[a-zA-Z0-9]{5,17}$/;
					return this.optional(element) || re1.test(value) || re2.test(value);
				}
			}, "请输入正确的证件号码");

			var formDom = $("#form");
			formDom[0].prevTime = new Date().getTime();
			//绑定效验信息
			formDom.validate({
				onkeyup: false,
				onfocusout: function(element) {
					$(element).valid();
				},
				rules: {
					realname: {
						required: true
					},
					phone: {
						required: true,
						phone: "请输入正确的手机号"
					},
					idcard: {
						required: true,
						idcard: true
					}
				},
				messages: {
					realname: {
						required: '姓名不能为空'
					},
					phone: {
						required: '手机号不能为空',
						phone: "请输入正确的手机号"
					},
					idcard: {
						required: "证件号不能为空"
					}
				},
				errorPlacement: function(error, element) {
					var now = new Date().getTime();
					if(now - formDom[0].prevTime > 50) {
						layer.msg(error.text());
					}
					formDom[0].prevTime = now;

				},
			});
		}
		/**
		 * @desc 绑定事件
		 */
	var bindEvent = function() {
		$(".js-submit").click(function() {
			if(!$("#form").valid()) {
				return false;
			}
			var submitData = $.extend(true, {}, vModel.form);
			Ajax.request('/member/realNameAuthentication', submitData, function(rep) {
				layer.msg((realNameObj ? '更新' : '新建') + "实名认证成功!", {
					end: function() {
						window.parent && window.parent.location.reload();
					}
				});
			});
		});
	}
	var init = function() {
		initModel();
		bindEvent()
		bindValidate();
	};
	init();
});