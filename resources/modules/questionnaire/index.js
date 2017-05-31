require(['jquery', './modules/common/tableOption', "Vue", "layer"], function($, BtrTable, Vue, layer) {
	var vModel, defaultForm = {
		    realname:'',//姓名
			statusList: [], //订单状态
			phone: "" //手机号
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
		url: Base.qmServer + 'dwjYjdc/queryDwjYjdc',
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
			field: 'realname',
			title: '姓名',
			align: 'center',
			width: '120px'
		}, {
			title: '手机号',
			field: 'phone',
			align: 'center',
			width: '130px'
		}, {
			field: 'sex',
			title: '性别',
			align: 'center',
			width: '130px',
			formatter: function(value, index, row) {
				return value == 1 ? '男' : '女';
			}
		}, {
			field: 'birthday',
			title: '出生日期',
			align: 'center',
			width: '100px'
		}, {
			field: 'trip_mode',
			title: '答案1',
			align: 'center',
			width: '200px'
		}, {
			field: 'how_far',
			align: 'center',
			title: '答案2',
		}, {
			field: 'status',
			align: 'center',
			title: '状态',
			formatter: function(value, index, row) {
				return value == 0 ? '已答题' : '已兑奖';
			}

		}]
	});
});