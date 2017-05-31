require(["jquery", "Ajax", "qrcode"], function($, Ajax, qrcode) {
	var uid = Math.random();
	//加载登录二维码
	Ajax.request("qrcode/login", {
		'uid': uid
	}, function(res) {
		//生成二维码
		$('#qrcode').qrcode({
			width: 200,
			height: 200,
			correctLevel: 0,
			text: res.result
		});
	});
	//启动长连接实时获取用户扫码状况
	Ajax.longRequest(Base.longRequest + 'ws?uid=' + uid, {}, function(res) {
		if(res.code == 0) {
			$(".qrcode").hide();
			$(".user-login").show();
			$("#username").text(res.result.nickname);
			//加载头像
			var img = document.createElement("img");
			img.src = res.result.headimgurl;
			img.onload = function() {
				$(".avatar").css('background-image', 'url(' + res.result.headimgurl + ')');
			}
			return false;
		}
		if(res.code == 14) {
			$(".user-login").hide();
			$('.qrcode').hide();
			$('.login-error').show();
			return false;
		}
		alert(res.result);
	});
	//登录
	$('.js-login').click(function() {
		Ajax.request("user/ewmLogin", {
			'uid': uid
		}, function(data) {
			document.location.href = "view/index.html"
		});
	});

});