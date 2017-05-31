require(['jquery', './modules/common/tableOption', 'Ajax', "Vue", 'WdatePicker', "EasyDropdown", "layer"], function($, BtrTable, Ajax, Vue, WdatePicker, EasyDropdown, layer) {
	var vModel, previewModel, defaultForm = {
			realname: "",
			phone: ""
		},
		formData = {
			form: defaultForm
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
				},
				//页面渲染完成后回调
				ready: function() {

				}
			});
		}
		/**
		 * @desc 生成数据表格
		 */
	var initBtrTable = function() {
			//初始化表格
			btrTable = new BtrTable({
				dom: $("#btrTable"),
				url: Base.qmServer + 'member/queryAuthenticationListPage',
				toolbar: ".table_toolbar",
				showToggle: false,
				showExport: false,
				striped: false,
				/*singleSelect: true,*/
				showColumns: false,
				queryParams: function(params) {
					//获取查询参数
					var sParam = $.extend(true, {}, vModel ? vModel.form : {});
					//sParam.project_name = sParam.project_name ? sParam.project_name.join(",") : '';
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
					field: 'phone',
					title: '手机号',
					align: 'center',
					width: '140px'

				}, {
					field: 'realname',
					title: '姓名',
					align: 'center',
					width: '120px'
				}, {
					field: 'sex',
					title: '性别',
					width: '60px',
					align: 'center',
					formatter: function(value, index, row) {
						return {
							"1": "男",
							"2": "女"
						}[value];
					}
				}, {
					field: 'idcard',
					title: '证件号码',
					width: '230px',
					formatter: function(value, row, index) {
						return "<div><a data-index=" + index + " class='abtn preview' href='javascript:;'>" + value + "</a></div>";
					}
				}, {
					title: '操作',
					align: 'center',
					formatter: function(value, index, row) {
						return "<div><a data-index=" + row + " class='abtn edit' href='javascript:;'>编辑</a></div>";
					}

				}]
			});
		}
		/**
		 * @desc 加载卡券详情
		 * @param {Object} param
		 * @param {Object} callBack
		 */
	var loadCardInfo = function(param, callBack) {
		Ajax.request("card/getCardInfoByCardid", param, function(rep) {
			typeof callBack === 'function' && callBack.apply(this, arguments);
		});
	}

	/**
	 * @desc 预览
	 * @param {Object} data
	 */
	var renderPreview = function(data) {
		debugger;
		var dom;
		for(var obj in data) {
			dom = $('.js-view-' + obj);
			if(obj == 'sex') {
				dom.length > 0 && dom.text(data[obj] == '1' ? '男' : '女');
			} else {
				dom.length > 0 && dom.text(data[obj]);
			}
		}
	}
	var bindEvent = function() {
		//删除
		$(".js-del").click(function() {
			var selectArray = btrTable.getDom().bootstrapTable("getSelections"),
				ids = [];
			if(selectArray.length == 0) {
				layer.msg("请选中要删除的数据");
				return false;
			}
			for(var i = 0; i < selectArray.length; i++) {
				ids.push(selectArray[i].id);
			}
			layer.confirm('确定删除选中的数据吗？', {
				btn: ['确定', '取消'],
			}, function() {
				// 根据id查询会员信息
				Ajax.request('member/deleteRealName', {
					id: ids.join(',')
				}, function(data) {
					layer.msg("删除成功", {
						end: function() {
							btrTable.refresh();
						}
					})
				});
			}, function() {
				//取消回调
			});

		});
		//新增
		$(".js-add").click(function() {
			layer.open({
				type: 2,
				title: '新建实名认证',
				shadeClose: true,
				shade: 0.8,
				area: ['450px', '300px'],
				content: 'add.html'
			});
		});
		var btrDomWarp = $("#btrTable");
		//编辑
		btrDomWarp.on('click', '.edit', function() {
			var index = $(this).data("index"),
				data = btrTable.getData()[index];
			layer.open({
				type: 2,
				title: '编辑实名认证',
				shadeClose: true,
				shade: 0.8,
				area: ['450px', '300px'],
				content: 'add.html?obj=' + encodeURIComponent(JSON.stringify(data))
			});

		});
		//预览
		btrDomWarp.on('click', '.preview', function() {
			var index = $(this).data("index"),
				data = btrTable.getData()[index];
			renderPreview(data);
			layer.open({
				type: 1,
				title: '实名认证详情',
				shadeClose: true,
				shade: 0.8,
				area: ['400px', '350px'],
				content: $('.realname_info_warp')
			});

		});
	}
	var init = function() {
		bindEvent();
		initModel();
		initBtrTable();
		//initPrivewModel();
	}
	init();
});