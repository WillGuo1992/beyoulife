require(['jquery', 'layer', 'modules/common/tableOption', 'Ajax', 'util'], function($, layer, BtrTable, Ajax, Util) {
	var btrTable, pages = $(".add_content_warp"),
		hours = Util.Request('hours'),
		date = Util.Request('date');
	hours = decodeURIComponent(hours); //预约的时段
	/**
	 * @desc 查询车牌号
	 * @param {Object} param
	 * @param {Object} callBack
	 */
	var loadCarNo = function(param, callBack) {
			Ajax.ajax(Base.domainName + 'beyoulife-wx/park/getParkInfoByOpenid', param, function(rep) {
				typeof callBack == 'function' && callBack(rep);
			});
		}
		/**
		 * @desc 预约洗车
		 */
	var yyWash = function(param, callBack) {
			Ajax.ajax(Base.domainName + 'beyoulife-wx/carWash/saveCarWashInfo', param, function(rep) {
				typeof callBack == 'function' && callBack(rep);
			});
		}
		/**
		 * @desc 显示车牌号
		 * @param {Object} carNos
		 */
	var renderCarNo = function(carNos) {
			var htmlArray = [];
			for(var i = 0; i < carNos.length; i++) {
				htmlArray.push('<div class="carNo">');
				htmlArray.push('<div class="radio_check ' + ' ' + (i == 0 && 'active') + '" data-carno=' + carNos[i].carNo + ' data-phone=' + carNos[i].phone + ' data-openid=' + carNos[i].openid + '>');
				htmlArray.push('<i class="radio_check_icon"></i>');
				htmlArray.push('<input type="radio" name="" id="" value="" />');
				htmlArray.push('</div>');
				htmlArray.push('<div class="carNo_word">' + carNos[i].carNo + '</div>');
				htmlArray.push('</div>');
			}
			$('.js-carNo-warp').html(htmlArray.join(''));
		}
		/**
		 * @desc 显示预约信息
		 * @param {Object} param
		 */
	var renderSuccessInfo = function(param) {
		$('.js-phone').text(param.phone);
		$('.js-success-carNo').text(param.carNo);
		$('.js-date').text(new Date(param.yyDate).Format('yyyy年MM月dd日'));
		$('.js-hour').text(param.yyTime);
	}
	var initTable = function() {
		btrTable = new BtrTable({
			dom: $("#btrTable"),
			url: Base.qmServer + 'member/queryMemberCardListPage',
			showToggle: false,
			showExport: false,
			showPaginationSwitch: false,
			striped: false,
			showColumns: false,
			singleSelect: true,
			pagination: true,
			setHeight: function() {
				return 200;
			},
			queryParams: function(params) {
				//获取查询参数
				return {
					'pageNum': params.offset / params.limit + 1,
					'pageSize': params.limit,
					'field': params.sort,
					'sort': params.order,
					'phone_no': $.trim($("#phone_no").val())
				}
			},
			columns: [{
				checkbox: true,
			}, {
				field: 'phone_no',
				title: '手机号',
				align: 'center'
			}, {
				field: 'nickname',
				title: '用户昵称',
				align: 'center'
			}, {
				field: 'openid',
				visible: false
			}]
		});
		/*setTimeout(function(){
			$('.pagination-detail').remove();
		},300);*/
	}
	var bindEvent = function() {
		//查询
		$('.js-search').click(function() {
			btrTable.getDom().bootstrapTable('destroy');
			initTable();
		});
		//下一步
		$('.js-first-next').click(function() {
			var selects = btrTable.getDom().bootstrapTable('getSelections');
			if(selects.length == 0) {
				layer.msg("请选择要预约的会员");
				return false;
			}
			var obj = selects[0];
			loadCarNo({
				openid: obj.openid
			}, function(rep) {
				if(rep.result.length > 0) {
					renderCarNo(rep.result);
					pages.hide().eq(1).show();
				} else {
					pages.hide().eq(2).show();
				}
			});
		});
		$('.js-second-next').click(function() {
			var radioCheck = $('.radio_check.active'),
				openid = radioCheck.data('openid'),
				phone = radioCheck.data('phone'),
				carNo = radioCheck.data('carno');
			var param = {
				openid: openid,
				phone: phone,
				cardid: '14737-31141-23456',
				carNo: carNo,
				yyDate: date,
				yyTime: hours
			};
			//预约车保养
			yyWash(param, function(rep) {
				renderSuccessInfo(param);
				pages.hide().eq(3).show();
			});
		});
		$('.js-carNo-warp').on('click', '.carNo', function() {
			$('.radio_check').removeClass('active');
			$(this).find('.radio_check').addClass('active');
		});
		$('.js-success').click(function() {
			window.parent.location.reload();
		});
	};
	var init = function() {
		initTable();
		bindEvent();
	}
	init();
});