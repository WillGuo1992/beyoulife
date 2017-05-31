require(["jquery", "util", "jquery.validate", "Ajax", "Vue", ], function($, Util, Validate, Ajax, Vue) {
	//获取参数
	var id = Util.Request("id"),
		vModel, modelData = {
			roleList: [], //权限列表
			user: "", //用户信息
			userRole: [] //用户权限列表
		};
	var initModel = function() {
			vModel = new Vue({
				el: "#sForm",
				data: modelData,
				methods: {
					submit: function() {
						//修改
						var ajaxSubmit = function() {
							if(vModel.userRole.length == 0) {
								alert('请选择权限');
								return false;
							}
							Ajax.request('user/updateRoleUser', {
								id: id,
								roleList: vModel.userRole.join(',')
							}, function(rep) {
								layer.msg("保存成功!");
								setTimeout(function() {
									window.parent && window.parent.location.reload();
								}, 2000);
							});
						}
						layer.msg('确认保存数据吗？', {
							time: 20000, //20s后自动关闭
							btn: ['确认', '取消'],
							yes: function() {
								ajaxSubmit();
							}
						});
					}
				}
			});
		}
		//获取用户信息
	Ajax.request("user/getUserInfoById", {
		id: id
	}, function(response) {
		modelData.user = response.result;
		modelData.userRole = modelData.user.roleList.split(',');
		modelData.roleList && initModel();
	});
	Ajax.request("menu/queryAllMenu", {}, function(response) {
		modelData.roleList = formatMenu(response.result);
		modelData.user && initModel();
	});
	/**
	 * 转换菜单格式
	 * @param {Object} list
	 */
	var formatMenu = function(list) {
		var menus = [];
		for(var i = 0, len = list.length; i < len; i++) {
			if(list[i].pid == -1) {
				menus.push(list[i]);
			} else {
				for(var j = 0; j < menus.length; j++) {
					if(menus[j].id == list[i].pid) {
						menus[j].list = menus[j].list || [];
						menus[j].list.push(list[i]);
					}
				}
			}
		}
		return menus;
	}
});