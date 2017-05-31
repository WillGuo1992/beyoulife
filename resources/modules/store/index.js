require(['jquery', './modules/common/tableOption', 'Ajax', "Vue", 'WdatePicker', "EasyDropdown", "layer"], function($, BtrTable, Ajax, Vue, WdatePicker, EasyDropdown, layer) {
	var rentModel = {
		0: '不适用',
		1: '抽成租金模式',
		2: '固定租金模式'
	};
	var vModel, defaultForm = {
			store_no: "", //商铺编号
			store_name: '', //商铺名称
			enable: '-1'
		},
		formData = {
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
						$("#status").easyDropDown("select", 0);
						btrTable.refresh();
					},
					add: function() {

					}
				},
				//页面渲染完成后回调
				ready: function() {
					//下拉框
					$("#status").easyDropDown({
						"cutOff": 10,
						onChange: function(obj) {
							vModel.form.enable = obj.value;
						}
					});
				}
			});
		}
		//初始化表格
	btrTable = new BtrTable({
		dom: $("#btrTable"),
		url: Base.qmServer + 'store/queryStorePage',
		setHeight: function() {
			return $(window).height() - $('.search-panel').outerHeight() - 30;
		},
		queryParams: function(params) {
			//获取查询参数
			var sParam = $.extend(true, {}, vModel ? vModel.form : {});
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
			field: 'id',
			title: '序号',
			sortable: true,
			width: '50px'
		}, {
			field: 'store_no',
			title: '店铺号',
			width: '80px'
		}, {
			field: 'store_name',
			title: '店铺名称',
			width: '150px'
		}, {
			field: 'area',
			title: '面积',
			sortable: true,
			width: '150px',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				return '<span>' + (index.area ? index.area + '/㎡' : "") + '</span>'
			}
		}, {
			field: 'rent_model',
			title: '租金模式',
			width: '200px',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				return '<span>' + (rentModel[index.rent_model] || '') + '</span>'
			}
		}, {
			field: 'tag1',
			title: '标签1',
			width: '100px'
		}, {
			field: 'tag2',
			title: '标签2',

			width: '100px'
		}, {
			field: 'tag3',
			title: '标签3',

			width: '100px'
		}, {
			field: 'entertime',
			title: '入驻时间',
			sortable: true,
			width: '200px'
		}, {
			field: 'outtime',
			title: '到期时间',
			sortable: true,
			width: '200px'
		}, {
			field: 'enable',
			title: '状态',
			width: '80px',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				return '<span>' + (index.enable == 0 ? '生效' : '失效') + '</span>'
			}
		}, {
			title: '操作',
			align: 'center',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				return '<div data-row=\'' + obj + '\' class="table-btn-list"><a class="abtn edit" href="#">编辑</a></div>'
			}

		}]
	});
	var bindEvent = function() {
		//添加店铺
		$('.js-add').click(function() {
			layer.open({
				type: 2,
				title: '添加',
				shadeClose: true,
				shade: 0.8,
				area: ['550px', '450px'],
				content: 'add.html' //iframe的url
			});
		});
		//编辑店铺信息
		btrTable.getDom().on('click', '.edit', function() {
			var row = $(this).parent().data("row");
			layer.open({
				type: 2,
				title: '添加',
				shadeClose: true,
				shade: 0.8,
				area: ['550px', '450px'],
				content: 'add.html?type=edit&id=' + row.id //iframe的url
			});
		});
	};
	initModel();
	bindEvent();
});