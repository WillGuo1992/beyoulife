require(["jquery", "layer", "Ajax", "util", "jquery.validate", "Vue"], function($, layer, Ajax, Util, Validate, Vue) {
	var chanelId = Util.Request("id"),
		type = Util.Request('type'),
		vModel;
	/**
	 * @desc 初始化页面数据模型
	 */
	var initModel = function() {
			vModel = new Vue({
				el: "#modelForm",
				data: {
					form: {}
				},
				methods: {
					//新增修改
					submitForm: function() {
						//效验表单
						if(!$(vModel.$el).valid()) {
							return false;
						}
						var submitForm = $.extend(true, {}, vModel.form);
						if(type == 'edit') {
							Ajax.request("channel/updateChannel", submitForm, function(rep) {
								layer.msg("更新成功");
							});
						} else {
							//判断渠道是否已经存在
							Ajax.request("channel/hasChannelIdent", submitForm, function(rep) {
								//新增渠道
								Ajax.request("channel/insertChannel", submitForm, function(rep) {
									layer.msg("保存公众号二维码渠道成功");
								});
							});
						}
					}
				}
			})
		}
		/**
		 * @desc 获取渠道信息
		 * @param {Object} id 
		 * @param {Object} callBack 回调
		 */
	var loadChanel = function(id, callBack) {
			Ajax.request('channel/getChannelById', {
				id: id
			}, function(rep) {
				callBack && callBack(rep);
			});
		}
		/**
		 * @desc 表单效验
		 */
	var initValidate = function() {
			$.validator.addMethod("chanelName", function(value, element) {
				return this.optional(element) || /^[a-zA-Z\u4e00-\u9fa5]+$/.test(value);
			}, "渠道名称只能是中英文");
			$.validator.addMethod("chanelIdentification", function(value, element) {
				return this.optional(element) || /[a-zA-Z]/.test(value);
			}, "渠道标识只能是字母");
			$(vModel.$el).validate({
				onkeyup: false,
				onfocusout: function(element) {
					$(element).valid();
				},
				rules: {
					name: {
						required: true,
						chanelName: true
					},
					identification: {
						required: true,
						chanelIdentification: true
					},
					type_tag: {
						required: true
					}
				},
				messages: {
					name: {
						required: '渠道名称不能为空'
					},
					identification: {
						required: '渠道标识不能为空'
					},
					type_tag: {
						required: '类别标签不能为空'
					}
				},
				errorPlacement: function(error, element) {
					layer.msg(error.text());
				},
			});
		}
		/**
		 * @desc 初始化
		 */
	var init = function() {
		initModel();
		initValidate();
		if(type == 'edit') {
			loadChanel(chanelId, function(rep) {
				vModel.form = rep.result;
			});
			$("input[name=identification]").attr('readonly', 'readonly').click(function() {
				layer.msg("渠道标识禁止修改");
			});
		}
	}
	init();
});