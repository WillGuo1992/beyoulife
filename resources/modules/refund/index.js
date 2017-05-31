require(["jquery", "Ajax", 'modules/common/tableOption', "qrcode"], function($, Ajax, BtrTable, qrcode) {
	var uid = Math.random(),
		btrTable;
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
					"error": function(result) {
						addError(result);
					},
					//退款成功
					"39": function(result) {
						//$('.js-fourth').removeAttr("disabled").removeClass('btn-default').addClass('btn-primary');
						Panel.next();
					},
					//顾客扫码
					"38": function(result) {
						var user = result.user;
						var img = document.createElement("img");
						img.onload = function() {
							this.width = 150;
							this.height = 150;
						};
						img.src = user.headimgurl || '../../resources/images/avath.png';
						$('.js-usericon').append(img);
						$('.js-nickname').text(user.nickname);
						$('.js-first').removeAttr("disabled").removeClass('btn-default').addClass('btn-primary');
						initTable(result.tradeInfoList);
					}
				}
				//启动长连接
			Ajax.longRequest(Base.longRequest + 'ws?uid=' + uid, {}, function(rep) {
				var fun = callBackExecute[rep.code];
				fun ? fun(rep.result) : callBackExecute['error']();
			});
		}
		/**
		 * @desc 生成用户扫描的二维码
		 */
	var initUserQrcode = function() {
			Ajax.request("qrcode/customer", {
				uid: uid
			}, function(rep) {
				$('.js-qrcode-user').empty().qrcode({
					width: 200,
					height: 200,
					correctLevel: 0,
					text: rep.result
				});
				initLongRequest();
			});
		}
		/**
		 * @desc生成表格
		 * @param {Object} data
		 */
	var initTable = function(data) {
		btrTable = new BtrTable({
			dom: $("#btrTable"),
			sidePagination: 'client',
			showToggle: false,
			showExport: false,
			striped: false,
			/*singleSelect: true,*/
			showColumns: false,
			pagination: false,
			data: data,
			onCheck: function(obj, dom) {
				/*if(!obj['refund_status']) {
					
				}*/
				if(obj.status != 0 && !obj['refund_status']) {

				} else {
					dom[0].checked = false;
				}
				countThirdBtnStyle();
			},
			onUncheck: function() {
				countThirdBtnStyle();
			},
			columns: [{
				checkbox: true
			}, {
				field: 'out_trade_no',
				title: '订单号',
				width: '120px'
			}, {
				field: 'totalMoney',
				title: '金额',
				width: '130px'
			}, {
				field: 'addtime',
				title: '订单时间',
				width: '200px'
			}, {
				field: 'paytime',
				title: '支付时间',
				width: '200px'
			}, {
				field: 'gettime',
				title: '收货时间',
				width: '200px'
			}, {
				field: 'refundtime',
				title: '退款时间',
				width: '200px'
			}, {
				field: 'status',
				title: '订单状态',
				formatter: function(value, row, index) {
					if(row['refund_status']) {
						var info = {
							1: "退款中",
							2: "已退款"
						}
						return info[row['refund_status']];
					}
					var status = {
						0: '未支付',
						1: "已支付",
						2: "已兑换"
					}
					return status[value];
				}
			}]
		});
	}
	var countThirdBtnStyle = function() {
			setTimeout(function() {
				var selectArrays = btrTable.getDom().bootstrapTable("getSelections");
				var inputs = $("input[name=btSelectItem]:checked");
				if(inputs.length > 0) {
					$('.js-third').removeAttr("disabled").removeClass('btn-default').addClass('btn-primary');
				} else {
					$('.js-third').attr("disabled", 'disabled').removeClass('btn-primary').addClass('btn-default');
				}
			}, 0);
		}
		/**
		 * @desc 绑定事件
		 */
	var bindEvent = function() {
		//第一次下一步
		$('.js-first').click(function() {
			$('.js-qrcode').hide();
			$('.js-user').show();
		});
		//被添加用户 扫描完成后执行的下一步
		$('.js-second').click(function() {
			Panel.next();
		});
		$('.js-refresh-qrcode').click(initUserQrcode);
		$('.js-third').click(function() {
			var inputs = $("input[name=btSelectItem]:checked"),
				dataArray = btrTable.getDom().bootstrapTable("getData"),
				ids = [];
			for(var i = 0; i < inputs.length; i++) {
				var index = $(inputs[i]).data("index");
				ids.push(dataArray[index].id);
			}
			Ajax.request('wxRefund/tempCustomer', {
				uid: uid,
				ids: ids.join(',')
			}, function(rep) {
				Ajax.request("qrcode/service", {
					uid: uid
				}, function(rep) {
					$('.js-qrcode-admin').empty().qrcode({
						width: 200,
						height: 200,
						correctLevel: 0,
						text: rep.result
					});
					initLongRequest();
					Panel.next();
				});
			})

		});
		$('.js-fourth').click(function() {

		});
	}
	bindEvent();
	initUserQrcode();
});