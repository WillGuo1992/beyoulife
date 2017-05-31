require(["jquery", "util", "jquery.validate", "Ajax", "Vue", ], function($, Util, Validate, Ajax, Vue) {
	//获取参数
	var id = Util.Request("id"),
		vModel = new Vue({
			el: "#sForm",
			data: {
				form: {}
			},
			methods: {
				submit: function() {
					var submitForm = $.extend(true, {}, vModel.form);
					//去除前后空格
					Trim(submitForm);
					//修改
					var ajaxSubmit = function() {
							Ajax.request('user/updateBaseUser', vModel.form, function(rep) {
								layer.msg("保存成功!");
								setTimeout(function() {
									window.parent && window.parent.location.reload();
								}, 2000);
							});
						}
						//效验表单
					if(!$(vModel.$el).valid()) {
						return false;
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
	//获取用户信息
	Ajax.request("user/getUserInfoById", {
		id: id
	}, function(response) {
		vModel.form = response.result;
	});
	//绑定效验信息
	$(vModel.$el).validate({
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

});