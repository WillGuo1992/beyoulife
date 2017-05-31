require(['jquery', './modules/common/tableOption', 'Ajax', "Vue", 'WdatePicker', "EasyDropdown", "layer"], function($, BtrTable, Ajax, Vue, WdatePicker, EasyDropdown, layer) {
	var vModel, defaultForm = {
			out_trade_no: "", //订单号 
			statusList: [], //订单状态
			phone: "", //手机号
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
						btrTable.refresh();
					}
				}
			});
		}
		//初始化搜索Form
	initModel();
	//初始化表格
	btrTable = new BtrTable({
		dom: $("#btrTable"),
		url: Base.qmServer + 'trade/queryTradeInfo',
		setHeight: function() {
			return $(window).height() - $('.search-panel').outerHeight() - 30;
		},
		queryParams: function(params) {
			//获取查询参数
			var sParam = $.extend(true, {}, vModel ? vModel.form : {});
			sParam.statusList = sParam.statusList ? sParam.statusList.join(",") : '';
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
				field: 'addtime',
				title: '订单时间',
				sortable: true,
				width: '200px'
			}, {
				field: 'out_trade_no',
				title: '订单号',
				sortable: true,
				width: '100px'
			}, {
				field: 'nickname',
				title: '昵称',
				width: '100px',
				formatter: function(value, index, row) {
					var obj = JSON.stringify(index);
					//														console.log(index.card_no);
					return '<a href="#" class="socreDetail" data-card=' + index.card_no + '>' + index.nickname + '</a>'
				}
			}, {
				field: 'totalMoney',
				title: '总金额',
				sortable: true,
				width: '60px'
			}, {
				field: 'paytime',
				title: '支付时间',
				sortable: true,
				width: '200px'
			}, {
				field: 'status',
				title: '订单状态',
				width: '80px',
				formatter: function(value, index, row) {
					var obj = JSON.stringify(index);
					//							console.log(index);
					if(index.status == 1) {
						return '<span>已支付</span>'
					} else if(index.status == 2) {
						return '<span>已收货</span>'
					} else {
						return '<span>未支付</span>'
					}

				}
			}, {
				field: 'gettime',
				title: '收货时间',
				sortable: true,
				width: '200px'
			}

		]
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