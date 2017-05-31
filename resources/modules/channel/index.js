require(['jquery', './modules/common/tableOption', 'Ajax', "Vue", 'WdatePicker', "EasyDropdown", "layer"], function($, BtrTable, Ajax, Vue, WdatePicker, EasyDropdown, layer) {
	var vModel, defaultForm = {
			keyword: '', //关键字
			startDate: "", //开始日期
			endDate: "" //结束日期
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
						btrTable.refresh();
					}
				}
			});
		}
		//初始化表格
	btrTable = new BtrTable({
		dom: $("#btrTable"),
		url: Base.qmServer + 'channel/queryChannel',
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
			title: '编号',
			width: '120px',
			formatter: function(value, index, row) {
				return row + 1;
			}
		}, {
			field: 'name',
			title: '渠道名称',
			width: '200px'
		}, {
			field: 'identification',
			title: '渠道标识',
			width: '200px'
		}, {
			field: 'type_tag',
			title: '类别标签',
			width: '150px'
		}, {
			title: '二维码下载',
			align: 'center',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				return '<div data-row=\'' + obj + '\' class="table-btn-list"><a class="abtn viewing" href="#">预览</a>&nbsp;&nbsp;<a class="abtn download" href="#">下载</a></div>'
			}

		}, {
			field: 'addtime',
			title: '生成时间',
			sortable: true,
			width: '200px'
		}, {
			title: '操作',
			align: 'center',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				return '<div data-row=\'' + obj + '\' class="table-btn-list"><a class="abtn qrc-edit" href="#">编辑</a></div>'
			}

		}]
	});
	/**
	 * @desc 绑定事件
	 */
	var bindEvent = function() {
			var dom = btrTable.getDom();
			dom.on('click', '.viewing', function() {
				//预览
				var row = $(this).parent().data('row');
				layer.open({
					type: 2,
					title: '二维码预览',
					shadeClose: true,
					shade: 0.8,
					area: ['432px', '472px'],
					content: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + row.ticket
				});

			}).on('click', '.download', function() {
				//下载
				var row = $(this).parent().data('row');
				document.location.href = Base.qmServer + 'channel/downloadQrcode?id=' + row.id;

			}).on('click', '.qrc-edit', function() {
				//编辑
				var row = $(this).parent().data('row');
				layer.open({
					type: 2,
					title: '编辑公众号二维码渠道',
					shadeClose: true,
					shade: 0.8,
					area: ['500px', '250px'],
					content: 'add.html?id=' + row.id + "&type=edit"
				});
			});
			//新增渠道
			$(".js-add").click(function() {
				layer.open({
					type: 2,
					title: '新建公众号二维码渠道',
					shadeClose: true,
					shade: 0.8,
					area: ['500px', '250px'],
					content: 'add.html?type=add'
				});
			});
			//删除选中渠道
			$(".js-del").click(function() {
				var selects = btrTable.getDom().bootstrapTable('getSelections'),
					idArray = [];
				if(selects.length == 0) {
					layer.msg("请至少选中一条数据");
					return false;
				}
				for(var i = 0, channel; channel = selects[i++];) {
					idArray.push(channel.id);
				}
				layer.msg('确认删除吗？', {
					time: 20000, //20s后自动关闭
					btn: ['确认', '取消'],
					yes: function() {
						Ajax.request("channel/deleteChannelByIds", {
							ids: idArray.join(",")
						}, function(rep) {
							layer.msg("删除成功");
							setTimeout(function() {
								window.location.reload();
							});
						});
					}
				});
			});
		}
		/**
		 * @desc 初始化日期控件
		 */
	var initDatePicker = function() {
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
	}
	var init = function() {
		initModel(), initDatePicker(), bindEvent();
	}
	init();
});