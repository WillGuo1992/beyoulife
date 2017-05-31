require(['jquery', './modules/common/tableOption', 'Ajax', "Vue", 'WdatePicker', "EasyDropdown", "layer"], function($, BtrTable, Ajax, Vue, WdatePicker, EasyDropdown, layer) {
	var vModel, defaultForm = {
			realname: "", //姓名 
			phone: "", //手机号
			department: "", //部门
			position: "" //岗位
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
					},
					//添加新用户
					add: function() {
						window.location.href = "add.html?random=" + Math.random();
					}
				}
			});
		}
		//初始化搜索Form
	initModel();
	//初始化表格
	btrTable = new BtrTable({
		dom: $("#btrTable"),
		url: Base.qmServer + 'user/queryListByPage',
		setHeight: function() {
			return $(window).height() - $('.search-panel').outerHeight() - 30;
		},
		queryParams: function(params) {
			//获取查询参数
			var sParam = $.extend(true, {}, vModel ? vModel.form : {});
			//屏蔽对象属性空格
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
			sortable: true,
			width: '150px'
		}, {
			field: 'phone',
			title: '手机号',
			width: '200px'
		}, {
			field: 'department',
			title: '部门',
			width: '200px'
		}, {
			field: 'position',
			title: '岗位',
			sortable: true,
			width: '200px'
		}, {
			title: '操作',
			align: 'center',
			formatter: function(value, index, row) {
				var obj = JSON.stringify(index);
				//console.log(obj);
				if(index.roleType == -1) {
					return '<div data-row=\'' + obj + '\' class="table-btn-list" id="' + index.roleType + '"><a class="abtn change-info" href="#" style="color:#ddd">修改信息</a>&nbsp;&nbsp;<a class="abtn change-limit" href="#" style="color:#ddd">修改权限</a>&nbsp;&nbsp;<a class="abtn delete-info" href="#" style="color:#ddd">删除</a></div>'

				} else {
					return '<div data-row=\'' + obj + '\' class="table-btn-list" id="' + index.roleType + '"><a class="abtn change-info" href="#">修改信息</a>&nbsp;&nbsp;<a class="abtn change-limit" href="#">修改权限</a>&nbsp;&nbsp;<a class="abtn delete-info" href="#">删除</a></div>'

				}
			}

		}]
	});
	//修改会员信息
	btrTable.getDom().on('click', '.change-info', function() {
		var row = $(this).closest('.table-btn-list').data('row');
		var id = row.id;
		var roletype = $(this).closest('.table-btn-list').attr('id');
		if(roletype != -1) {
			layer.open({
				type: 2,
				title: '修改信息',
				shadeClose: true,
				shade: 0.8,
				area: ['600px', '500px'],
				content: 'edit.html?id=' + id //iframe的url
			});
		} else {
			layer.msg("不能修改信息");
		}
	});
	//修改用户权限
	btrTable.getDom().on('click', '.change-limit', function() {
		var row = $(this).closest('.table-btn-list').data('row');
		var id = row.id;
		var roletype = $(this).closest('.table-btn-list').attr('id');
		console.log(roletype);
		if(roletype != -1) {
			layer.open({
				type: 2,
				title: '修改权限',
				shadeClose: true,
				shade: 0.8,
				area: ['600px', '500px'],
				content: 'editlimit.html?id=' + id
			});
		} else {
			layer.msg("不能修改权限");
		}
	});
	//删除
	btrTable.getDom().on('click', '.delete-info', function() {
		var row = $(this).closest('.table-btn-list').data('row');
		var id = row.id;
		var roletype = $(this).closest('.table-btn-list').attr('id');
		if(roletype != -1) {
			layer.confirm('您确认删除信息吗?', {
				btn: ['确定', '取消'],
			}, function() {
				Ajax.request('user/deleteUserById', {
					'id': id
				}, function(rep) {
					btrTable.refresh();
				});
			}, function() {
				//取消回调
			});
		} else {
			layer.msg("不能删除");
		}
	});
});