define(["jquery"], function($) {
	var Reg = {
		"price": "", //兑换价格
		"num": /^[0-9]\d*$/ //不小于零的整数
		"idcard": /\d{17}\d|X/, //身份证
		'phone': /^1\d{10}$/, //电话号码
		'email': /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ //效验邮箱
	};
	var strategies = {
		isNull: function(dom, msg) {
			var value = $.trim(dom.value);
			if(!dom.value) {
				return msg;
			}
		},
		isPhone: function(dom, msg) {
			var value = $.trim(dom.value);
			if(value && !Reg.phone.test(value)) {
				return msg;
			}
		},
		isEmail: function(dom, msg) {
			var value = $.trim(dom.value);
			if(value && !Reg.phone.test(value)) {
				return msg;
			}
		},
		isIdCard: function(dom, msg) {
			var value = $.trim(dom.value);
			if(value && !Reg.idcard.test(value)) {
				return msg;
			}
		},
		isPrice: function(dom, msg) {
			var value = $.trim(dom.value);
			if(value && !Reg.idcard.test(value)) {
				return msg;
			}
		},
		isNum: function(dom, msg) {
			var value = $.trim(dom.value);
			if(value && !Reg.idcard.test(value)) {
				return msg;
			}
		}
	};
	var cache = [];
	/**
	 * @desc 添加效验规则
	 * @param {Object} dom
	 * @param {Object} rules eg:[{rule:'a',msg:'bbb'},{rule:'a',msg:'bbb'}]
	 * 	
	 */
	var add = function(dom, rules) {
			var self = this;
			for(var i = 0, rule; rule = rules[i++];) {
				(function(rule) {
					var strategy = rule.rule,
						msg = rule.msg;
					cache.push(function() {
						return strategies[strategy].apply(dom, [dom, msg]);
					});
				})(rule);
			}
		}
		/**
		 * @desc 效验
		 */
	var validate = function() {
			for(var i = 0, validatorFunc; validatorFunc = cache[i++];) {
				var errorMsg = validatorFunc();
				if(errorMsg) {
					return errorMsg;
				}
			}
		}
		/**
		 * @desc 清除
		 */
	var clean = function() {
		cache = [];
	}
	return {
		add: add,
		validate: validate,
		clean: clean
	}
});