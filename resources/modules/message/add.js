require(['jquery', 'layer', 'Ajax', 'util'], function($, layer, Ajax, Util) {
	var id = Util.Request("id"),
		titleDom = $("input[name=title]"),
		contentDom = $("textarea[name=content]");
	$(".js-submit").click(function() {
		var title = titleDom.val(),
			content = contentDom.val(),
			url = 'message/addMessage';
		title = $.trim(title);
		content = $.trim(content);
		if(!title) {
			layer.msg('消息标题不能为空');
			return false;
		}
		if(!content) {
			layer.msg('详细内容不能为空');
			return false;
		}
		var param = {
			title: title,
			content: content
		}
		if(id) {
			param.id = id;
			url = "message/updateMessage";
		}
		Ajax.request(url, param, function(rep) {
			layer.msg('添加成功');
			setTimeout(function() {
				window.parent.location.reload();
			}, 2000);
		})
	});
	$('.js-quit').click(function() {
          
	});
	//根据ID查询信息详情
	id && Ajax.request('message/getMessageById', {
		id: id
	}, function(rep) {
		titleDom.val(rep.result.title);
		contentDom.val(rep.result.content);
	})
});