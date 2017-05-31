require(["jquery", "layer", 'modules/common/tableOption'], function($, layer, BtrTable) {
	//添加消息
	$(".js-add").click(function() {
		layer.open({
			type: 2,
			title: '添加',
			shadeClose: true,
			shade: 0.8,
			area: ['500px', '300px'],
			content: 'add.html' //iframe的url
		});
	});
	$(document).on('click', '.edit', function() {
		var id = $(this).data(id);
		layer.open({
			type: 2,
			title: '添加',
			shadeClose: true,
			shade: 0.8,
			area: ['500px', '300px'],
			content: 'add.html?id=' + id //iframe的url
		});
	});
	var btrTable = new BtrTable({
		dom: $("#btrTable"),
		url: Base.qmServer + 'message/queryMessageByPage',
		setHeight: function() {
			return $(window).height() - $('.search-panel').outerHeight() - 30;
		},
		queryParams: function(params) {
			//合并查询参数和分页，排序参数
			return {
				'pageNum': params.offset / params.limit + 1,
				'pageSize': params.limit,
				'field': params.sort,
				'sort': params.order
			};
		},
		columns: [{
			checkbox: true
		}, {
			field: 'id',
			title: '序号',
			sortable: true,
			width: '60px'
		}, {
			field: 'title',
			title: '标题',

			width: '120px'
		}, {
			field: 'content',
			title: '内容',
			width: '200px'
		}, {
			field: 'addtime',
			title: '时间',
			sortable: true,
			width: '200px'
		}, {
			title: '操作',
			align: 'center',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				return '<div data-id=\'' + row.id + '\' class="table-btn-list"><a class="abtn edit" href="#">编辑</a>&nbsp;&nbsp;<a class="abtn delete" href="#">删除</a></div>'
			}

		}]
	});
});