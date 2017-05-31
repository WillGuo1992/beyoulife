require(['jquery', './modules/common/tableOption', 'WdatePicker'], function($, BtrTable) {
	//初始化表格
	var btrTable = new BtrTable({
		dom: $("#btrTable"),
		url: Base.qmServer + 'member/queryMemberCardListPage',
		setHeight: function() {
			return $(window).height() - $('.search-panel').outerHeight() - 20;
		},
		queryParams: function(params) {
			//获取查询参数
			return {
				'pageNum': params.offset / params.limit + 1,
				'pageSize': params.limit,
				'field': params.sort,
				'sort': params.order,
				'card_no': $.trim($('#card_no').val()),
				'phone_no': $.trim($('#phone_no').val()),
				'real_name': $.trim($('#real_name').val()),
				'startDate': $('#startTime').val().trim(),
				'endDate': $('#endTime').val()
			}
		},
		columns: [{
			checkbox: true
		}, {
			field: 'card_no',
			title: '会员卡号',
			sortable: true,
			width: '120px'
		}, {
			field: 'phone_no',
			title: '手机号',
			width: '130px'
		}, {
			field: 'nickname',
			title: '昵称',
			width: '130px'
		}, {
			field: 'integral',
			title: '积分',
			sortable: true,
			align: 'right',
			width: '100px'
		}, {
			field: 'addtime',
			title: '注册时间',
			sortable: true,
			width: '200px'
		}, {
			title: '操作',
			align: 'center',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				return '<div data-row=\'' + obj + '\' class="table-btn-list"><a class="abtn detail" href="#">查看</a>&nbsp;&nbsp;<a class="abtn edit" href="#">编辑</a>&nbsp;&nbsp;<a class="abtn scoredetail" href="#">积分明细</a>&nbsp;&nbsp;<a class="abtn addscore" href="#">增加积分</a>&nbsp;&nbsp;<a class="abtn lessscore" href="#">减少积分</a></div>'
			}
		}]
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
	//搜索
	$('.js-search').click(function() {
		btrTable.refresh();
	});
	//重置
	$('.js-reset').click(function() {
		$('.search-panel input[type=text]').val('');
		btrTable.refresh();
	});
	// 编辑会员信息
	$('#btrTable').on('click', '.edit', function() {
		var row = $(this).closest('.table-btn-list').data('row');
		/*var openid = $(this).closest('tr').data("openid");*/
		if(row.openid) {
			var phone = row.phone_no;
			layer.open({
				type: 2,
				title: '编辑',
				shadeClose: true,
				shade: 0.8,
				area: ['600px', '550px'],
				content: 'edit.html?phone=' + phone + '&type=1' //iframe的url
			});
		} else {
			layer.confirm('<p>会员未关注微信公众号并注册，请用户：</p><p>1，关注“比如世界购物中心”公众号；</p><p>2，完成手机号码验证登录，验证手机号应为会员注册的手机号码。</p>', {
				btn: ['确定'],
			}, function() {
				layer.closeAll();
			}, function() {
				//取消回调
			});
		}
	});
	//查看
	$('#btrTable').on('click', '.detail', function() {
		var row = $(this).closest('.table-btn-list').data('row');
		if(row.openid) {
			var phone = row.phone_no;
			layer.open({
				type: 2,
				title: '查看',
				shadeClose: true,
				shade: 0.8,
				area: ['600px', '550px'],
				content: 'edit.html?phone=' + phone + '&type=2' //iframe的url
			});
		} else {
			layer.confirm('<p>会员未关注微信公众号并注册，请用户：</p><p>1，关注“比如世界购物中心”公众号；</p><p>2，完成手机号码验证登录，验证手机号应为会员注册的手机号码。</p>', {
				btn: ['确定'],
			}, function() {
				layer.closeAll();
			}, function() {
				//取消回调
			});
		}
	});
	//积分明细
	$('#btrTable').on('click', '.scoredetail', function() {
		var row = $(this).closest('.table-btn-list').data('row');
		var card_no = row.card_no;
		layer.open({
			type: 2,
			title: '积分明细',
			shadeClose: true,
			shade: 0.8,
			area: ['780px', '400px'],
			content: 'detail.html?card_no=' + card_no //iframe的url
		});
	});
	//增加积分
	$('#btrTable').on('click', '.addscore', function() {
		var row = $(this).closest('.table-btn-list').data('row');
		var card_no = row.card_no;
		layer.open({
			type: 2,
			title: '增加积分',
			shadeClose: true,
			shade: 0.8,
			area: ['500px', '450px'],
			content: 'score.html?type=1&card_no=' + card_no //iframe的url
		});
	});
	//减少积分
	$('#btrTable').on('click', '.lessscore', function() {
		var row = $(this).closest('.table-btn-list').data('row');
		var card_no = row.card_no;
		layer.open({
			type: 2,
			title: '减少积分',
			shadeClose: true,
			shade: 0.8,
			area: ['500px', '450px'],
			content: 'score.html?type=2&card_no=' + card_no //iframe的url
		});
	});

});