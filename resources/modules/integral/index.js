require(['jquery', './modules/common/tableOption', 'Ajax', "Vue", 'WdatePicker', "EasyDropdown", "layer"], function($, BtrTable, Ajax, Vue, WdatePicker, EasyDropdown, layer) {
	var vModel, defaultForm = {
			store_name: "", //商铺 
			project_name: [], //项目
			startDate: "", //开始日期
			endDate: "" //结束日期
		},
		formData = {
			storeList: [],
			form: $.extend(true, {}, defaultForm)
		},
		btrTable;
	/**
	 * @desc 初始化搜索对象Model
	 */
	var initModel = function() {
			vModel = new Vue({
				el: "#sForm",
				data: formData,
				methods: {
					//查询
					search: function() {
						btrTable.refresh();
					},
					//重置
					reset: function() {
						//重置表单
						vModel.form = $.extend(true, {}, defaultForm);
						//下拉框回复默认(选择第一个元素)
						$("#store").easyDropDown("select", 0);
						btrTable.refresh();
					}
				},
				//页面渲染完成后回调
				ready: function() {
					//下拉框
					$("#store").easyDropDown({
						"cutOff": 10,
						onChange: function(obj) {
							vModel.form.store_name = obj.value;
						}
					});
				}
			});
		}
		//初始化表格
	btrTable = new BtrTable({
		dom: $("#btrTable"),
		url: Base.qmServer + 'integral/queryIntegralByPage',
		setHeight: function() {
			return $(window).height() - $('.search-panel').outerHeight() - 30;
		},
		queryParams: function(params) {
			//获取查询参数
			var sParam = $.extend(true, {}, vModel ? vModel.form : {});
			sParam.project_name = sParam.project_name ? sParam.project_name.join(",") : '';
			Trim(sParam);
			//合并查询参数和分页，排序参数
			return $.extend({
				'pageNum': params.offset / params.limit + 1,
				'pageSize': params.limit,
				'field': params.sort,
				'sort': params.order
			}, sParam);
		},
		columns: [{
			checkbox: true
		}, {
			field: 'project_name',
			title: '项目名称',
			width: '100px'
		}, {
			field: 'money',
			title: '消费金额',
			sortable: true,
			width: '100px'
		}, {
			field: 'integral',
			title: '积分数量',
			sortable: true,
			width: '100px',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				console.log(index);
				if(index.integral > 0) {
					return '<span style="color:red">' + '+' + index.integral + '</span>'
				} else {
					return '<span style="color:green">' + index.integral + '</span>'
				}

			}
		}, {
			field: 'shop_store',
			title: '店铺号',
			width: '150px'
		}, {
			field: 'store_name',
			title: '店铺名称',
			width: '200px'
		}, {
			field: 'card_no',
			title: '会员卡号',
			sortable: true,
			width: '200px'
		}, {
			field: 'addtime',
			title: '积分时间',
			sortable: true,
			width: '200px'
		}]
	});
	//加载所有店铺信息
	Ajax.request('store/queryStoreList', {}, function(rep) {
		formData.storeList = rep.result;
		/*formData.form.store_name = rep.result[0] || "";*/
		initModel();
	});
	//绑定日期控件
	$("#startTime").click(function() {
		WdatePicker.apply(this, [{
			maxDate: '#F{$dp.$D(\'endTime\');}'
		}]);
		return false;
	});
	$("#endTime").click(function() {
		WdatePicker.apply(this, [{
			minDate: '#F{$dp.$D(\'startTime\');}'
		}]);
		return false;
	});
});