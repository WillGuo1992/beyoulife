require(["jquery", "util", "./modules/common/validate", "Ajax", "avalon", "EasyDropdown", "WdatePicker"], function($, Util, Validate, Ajax, avalon, EasyDropdown, WdatePicker) {
	//获取参数
	var phone = Util.Request("phone"),
		type = Util.Request("type"),
		vm;
	//获取会员信息
	Ajax.request("member/queryMemberInfoByPhone", {
		phone: phone
	}, function(response) {
		var option = $.extend({
			phone_no: "",
			real_name: "",
			sex: "1",
			birthday: "",
			income: "无",
			education: "无",
			industry: "无",
			address: "",
			email: "",
			idcard: "",
			fixedphone: ""
		}, response.result);
		vm = avalon.define({
			$id: "form",
			user: option
		});
		avalon.scan(document.body);
		//初始化下拉选框控件的值
		$("#income").easyDropDown("select", option.income);
		$("#education").easyDropDown("select", option.education);
		$("#industry").easyDropDown("select", option.industry);
	});
	//编辑
	$(".js-submit").click(function() {
		//效验数据是否合法
		var msg = Validate.validate();
		if(msg) {
			layer.msg(msg);
			return false;
		}
		//avalon无法自动获取控件赋值,所以手动赋值
		vm.user.income = $("#income").val();
		vm.user.education = $("#education").val();
		vm.user.industry = $("#industry").val();
		vm.user.birthday = $("#birthday").val();
		//提交修改
		var submitForm = $.extend(true, {}, vm.user);
		Trim(submitForm);
		Ajax.request('member/setMemberInfo', submitForm, function(rep) {
			layer.msg("编辑会员信息成功!");
			setTimeout(function() {
				window.parent && window.parent.location.reload();
			}, 2000);
		});
	});
	//查看
	if(type == 2) {
		var div = document.createElement("div");
		div.style.cssText = "position:fixed;width:100%;height:100%;z-index:9999;left:0;top:0";
		document.body.appendChild(div);
		//移除提交，取消按钮
		$('.js-footer-btn').remove();;
		return false;
	}
	//绑定日期控件
	$("#birthday").click(function() {
		WdatePicker.apply(this, [{
			maxDate: '%y-%M-%d'
		}]);
	}).click();
	//添加表单效验
	Validate.add($("#phone_no")[0], [{
		rule: 'isNull',
		msg: "手机号不能为空"
	}, {
		rule: 'isPhone',
		msg: "请输入格式正确的手机号"
	}]);
	Validate.add($("#email")[0], [{
		rule: 'isEmail',
		msg: "请输入格式正确的邮箱地址"
	}]);
	Validate.add($("#idcard")[0], [{
		rule: 'isIdCard',
		msg: "请输入格式正确的身份证号码"
	}]);
});