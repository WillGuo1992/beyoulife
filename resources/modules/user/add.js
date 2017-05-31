require(["jquery", "util", "jquery.validate", "Ajax", "Vue", "qrcode"], function($, Util, Validate, Ajax, Vue, qrcode) {
	//获取参数
	var id = Util.Request("id"),
		vModel, modelData = {
			roleList: [], //权限列表
			form: {
				roleList: [],
				uid: Math.random()
			}
		};
	/**
	 * @desc 页面切换
	 */
	var Panel = {
			curIndex: 0,
			showPanel: function(index) {
				$(".breadcrumb-content").eq(index).show().siblings().hide();
				$('.js-breadcrumb li').eq(index).addClass('active').siblings().removeClass('active');
			},
			next: function() {
				this.curIndex++;
				this.showPanel(this.curIndex);
			}
		}
		/**
		 * @desc 初始化视图数据模型
		 */
	var initModel = function() {
			vModel = new Vue({
				el: "#sForm",
				data: modelData
			});
		}
		/**
		 * @desc 打开长连接
		 */
	var initLongRequest = function() {
			/**
			 * @desc添加错误信息
			 * @param {Object} text
			 */
			var addError = function(text) {
				var img = document.createElement("img");
				img.width = 100;
				img.height = 100;
				img.src = '../../resources/images/fail.png';
				$(".js-status-icon:visible").empty().append(img);
				$(".add_tips:visible").css('color', 'red').text(text);
			};
			/**
			 * @desc 根据返回的状态码执行不同的会掉函数
			 */
			var callBackExecute = {
					//授权信息已过期
					"13": function(result) {
						addError(result);
					},
					//已经是当前系统登录用户
					"15": function(result) {
						addError("您已经是当前系统用户");
					},
					//请求成功
					"19": function(result) {
						var img = document.createElement("img");
						img.onload = function() {
							this.width = 150;
							this.height = 150;
						};
						img.src = result.headimgurl || '../../resources/images/avath.png';
						$('.js-usericon').append(img);
						$('.js-nickname').text(result.nickname);
						$('.js-second').removeAttr("disabled").removeClass('btn-default').addClass('btn-primary');
					},
					//管理员授权成功
					"20": function(result) {
						$('.js-fourth').removeAttr("disabled").removeClass('btn-default').addClass('btn-primary');
					}
				}
				//启动长连接
			Ajax.longRequest(Base.longRequest + 'ws?uid=' + vModel.form.uid, {}, function(rep) {
				var fun = callBackExecute[rep.code];
				fun ? fun(rep.result) : alert(rep.result);
			});
		}
		/**
		 * @desc 绑定事件
		 */
	var bindEvent = function() {
			//第一次下一步
			$('.js-first').click(function() {
				//表单效验
				if(!$("#userForm").valid()) {
					return false;
				}
				var submitForm = $.extend(true, {}, vModel.form);
				//效验用户是否选中了用户权限
				if(submitForm.roleList.length == 0) {
					layer.msg("请选择用户权限");
					return false;
				}
				submitForm.roleList = submitForm.roleList.join(',');
				//去除前后空格
				Trim(submitForm);
				$(this).attr('disabled', 'disabled');
				//临时保存用户
				Ajax.request('user/saveTempUser', submitForm, function(rep) {
					Ajax.request('qrcode/reg', {
						uid: submitForm.uid
					}, function(regRep) {
						//生成被添加用户扫描的二维码
						$('.js-qrcode-user').qrcode({
							width: 200,
							height: 200,
							correctLevel: 0,
							text: regRep.result
						});
						Panel.next();
						initLongRequest();
					});

				});
			});
			//被添加用户 扫描完成后执行的下一步
			$('.js-second').click(function() {
				Panel.next();
			});
			$('.js-third').click(function() {
				Ajax.request('qrcode/admin', {
					uid: vModel.form.uid
				}, function(regRep) {
					//生成被添加用户扫描的二维码
					$('.js-qrcode-admin').qrcode({
						width: 200,
						height: 200,
						correctLevel: 0,
						text: regRep.result
					});
					Panel.next();
					initLongRequest();
				});
			});
			$('.js-fourth').click(function() {
				Panel.next();
			});
		}
		//获取菜单
	Ajax.request("menu/queryAllMenu", {}, function(response) {
		modelData.roleList = formatMenu(response.result);
		initModel();
	});
	//绑定效验信息
	$("#form").validate({
		onkeyup: false,
		onfocusout: function(element) {
			$(element).valid();
		},
		rules: {
			realname: {
				required: true
			},
			phone: {
				required: true,
				phone: "请输入正确的手机号"
			},
			email: {
				email: true
			}
		},
		messages: {
			realname: {
				required: '姓名不能为空'
			},
			phone: {
				required: '手机号不能为空',
				phone: "请输入正确的手机号"
			},
			email: {
				email: '请输入正确的邮箱'
			}
		},
		errorPlacement: function(error, element) {
			layer.msg(error.text());
		},
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
	bindEvent();
});