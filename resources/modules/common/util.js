define(["jquery"], function($) {
	/**
	 * @desc 获取地址栏参数
	 * @param {Object} key
	 */
	var Request = function(key) {
			var seachUrl = window.location.search.replace("?", "");
			var ss = seachUrl.split("&");
			var keyStr = "";
			var keyIndex = -1;
			for(var i = 0; i < ss.length; i++) {
				keyIndex = ss[i].indexOf("=");
				keyStr = ss[i].substring(0, keyIndex);
				if(keyStr == key) {
					return ss[i].substring(keyIndex + 1, ss[i].length);
				}
			}
			return null;
		}
		/**
		 * @description 获取页面域名，端口，站点名称
		 */
	var getDomain = function() {
			var url = window.location.href;
			var reg = /http:\/\/([^\/:]+)(:[0-9]+)?\/([^\/]+)/gi;
			reg.test(url);
			return {
				server: RegExp.$1,
				port: RegExp.$2,
				sitename: RegExp.$3
			};
		}
		/**
		 * @description 地址转义
		 * @param {Object} url
		 */
	var encodeUrl = function(url) {
			var str = url;
			//转义< 至&lt;
			var reg = /\</g;
			str = str.replace(reg, "&lt;");
			//转义>至&gt;
			reg = /\>/g;
			str = str.replace(reg, "&gt;");
			//转义&至&amp;
			reg = /&/g;
			str = str.replace(reg, "&amp;");
			//转义"至&quot;
			reg = /"/g;
			//转义*
			str = str.replace(reg, "&quot;");
			return str;
		}
		/**
		 * @description地址解码
		 * @param {Object} url
		 */
	var decodeUrl = function(url) {
			var str = url;
			//转义< 至&lt;
			var reg = /&lt;/g;
			str = str.replace(reg, "<");
			//转义>至&gt;
			reg = /&gt;/g;
			str = str.replace(reg, ">");
			//转义&至&amp;
			reg = /&amp;/g;
			str = str.replace(reg, "&");
			//转义"至&quot;
			reg = /&quot;/g;
			//转义*
			str = str.replace(reg, '"');
			return str;
		}
		/**
		 * @description 取消事件冒泡
		 * @param {Object} e Event对象
		 */
	var cancleBuble = function(e) {
		if(e.stopPropagation) return e.stopPropagation();
		else return e.cancelBubble = true;

		if(e.preventDefault) return e.preventDefault();
		else return e.returnValue = false;
	}

	/**
	 * @desc 页面跳转 
	 * @param {Object} url 跳转地址
	 * @param {Object} params 跳转参数
	 */
	var toPages = function(url, params) {
		var paramStr = "";
		if(url) {
			return false;
		}
		for(var param in params) {
			paramStr += "&" + param + "=" + params[param];
		}
		window.location.href = url + '?random=' + Matn.random() + paramStr;
	}
	return {
		Request: Request,
		getDomain: getDomain,
		encodeUrl: encodeUrl,
		decodeUrl: decodeUrl,
		cancleBuble: cancleBuble
	}
});