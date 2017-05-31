require(['jquery', './modules/common/tableOption', 'Ajax', "Vue", 'WdatePicker', "EasyDropdown", "layer"], function($, BtrTable, Ajax, Vue, WdatePicker, EasyDropdown, layer) {
	var vModel, previewModel, defaultForm = {
			card_type: "",
			startDate: "",
			endDate: "",
			title: ""
		},
		formData = {
			card_types: [{
				id: 100,
				name: '微信优惠券'
			}, {
				id: 201,
				name: '折扣券'
			}, {
				id: 202,
				name: '代金券'
			}, {
				id: 203,
				name: '兑换券/体验券'
			}, {
				id: 204,
				name: '换购券'
			}, {
				id: 205,
				name: '优惠券'
			}, {
				id: 206,
				name: '活动券'
			}],
			form: $.extend(true, {}, defaultForm)
		},
		btrTable;
	/**
	 * 初始化预览vue对象
	 * @param {Object} data
	 */
	var initPrivewModel = function(data) {
			previewModel = new Vue({
				el: "#coupon_privew",
				data: data,
				computed: {
					countLineColor: function() {
						return {
							backgroundImage: "url(" + getSplitLine(this.color) + ")"
						}
					},
					countTime: function() {
						var dateInfo = eval('(' + this.date_info + ')');
						var getTime = this.gettime || '';
						var getTime = getTime.replace(/-/g, "/");
						getTime = new Date(getTime);
						if(dateInfo.type == 1) {
							var dateScope = dateInfo.dateScope,
								scopeList = dateScope.split(',');
							if(scopeList[0] == scopeList[1]) {
								return scopeList[0]
							} else {
								return scopeList[0] + '至' + scopeList[1];
							}
						}
						if(dateInfo.type == 2) {
							var startTime = getTime.getTime() + dateInfo.effect * 3600 * 24 * 1000,
								endTtime = getTime.getTime() + (dateInfo.effect + dateInfo.day) * 3600 * 24 * 1000;
							return new Date(startTime).Format('yyyy-MM-dd') + '至' + new Date(endTtime).Format('yyyy-MM-dd')
						}
						if(dateInfo.type == 3) {
							var dateScope = dateInfo.dateScope;
							dateScope = dateScope.split(" ");
							return dateScope[0];
						}
					},
					formatCardInfo: function() {
						var chadInfo = eval('(' + this.card_info + ')');
						return chadInfo || {};
					},
					formatCheckInfo: function() {
						return eval('(' + this.check_info + ')');
					},
					countConditionInfo: function() {
						var condition = eval('(' + this.condition_info + ')') || {},
							str = "";
						if(condition.fullMoney) {
							str += "<p>消费满" + condition.fullMoney + "时方可使用</p>";
						}
						if(condition.appointGood) {
							str += "<p>消费指定商品" + condition.appointGood + "时方可使用</p>";
						}
						if(condition.useScope) {
							str += "<p>消费指定商品" + condition.useScope + "时方可使用</p>";
						}
						if(condition.noUserScope) {
							str += "<p>消费指定商品" + condition.noUserScope + "时方可使用</p>";
						}
						//if(condition.numLimit) {
						//str += "<p>数量限制：</p>"
						if(condition.numLimit.money) {
							str += "<p>消费没满" + condition.numLimit.money + "元,可使用" + (condition.numLimit.num || '') + "张券</p>";
						}
						if(condition.numLimit.num) {
							str += "<p>每次消费仅限使用" + condition.numLimit.num + "张券</p>";
						}
						//}
						if(condition.noEqauleCard) {
							str += "<p>不与其他优惠同时使用</p>";
						}
						if(condition.noChangeMoney) {
							str += "<p>不可兑换现金</p>";
						}
						if(condition.noGiveMoney) {
							str += "<p>不设找赎</p>";
						}
						return str;
					},
					//根据卡券类型获取图标样式
					countCardType: function() {
						var cardType = this.card_type;
						var imgType = {
							201: {
								text: '折扣券',
								img: 'zkq',
								style: 'bgb',
								unit: '折'
							},
							202: {
								text: '代金券',
								img: 'djq',
								style: 'bga',
								unit: '元'
							},
							203: {
								text: '兑换券',
								img: 'dhq',
								style: 'bgf'
							},
							204: {
								text: '换购券',
								img: 'hgq',
								style: 'bgc'
							},
							205: {
								text: '优惠券',
								img: 'yhq',
								style: 'bgg'
							},
							206: {
								text: '活动券',
								img: 'hdq',
								style: 'bgd'
							}
						}
						var type = imgType[cardType];
						return type;
					}
				}
			});
		}
		/**
		 * @desc 初始化搜索对象Model
		 */
	var initModel = function() {
			vModel = new Vue({
				el: "#sForm",
				data: formData,
				methods: {
					//查询
					search: function() {
						btrTable.refresh();
					},
					//重置
					reset: function() {
						//重置表单
						vModel.form = $.extend(true, {}, defaultForm);
						//下拉框回复默认(选择第一个元素)
						$("#store").easyDropDown("select", 0);
						btrTable.refresh();
					}
				},
				//页面渲染完成后回调
				ready: function() {
					//下拉框
					$("#card_type").easyDropDown({
						"cutOff": 10,
						onChange: function(obj) {
							vModel.form.card_type = obj.value;
						}
					});
				}
			});
		}
		/**
		 * @desc 生成虚线
		 * @param {Object} color 虚线颜色
		 * @return {String} 图片base64 地址 
		 */
	function getSplitLine(color) {
		color = color || "#006633";
		var lineCount = 25,
			lineWidth = 20,
			pading = 5,
			maxWidth = (lineWidth + pading) * (lineCount + 1)
		var canvas = document.createElement("canvas");
		canvas.width = maxWidth;
		canvas.height = 1;
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.strokeStyle = color;
		var drawColor = function(context, startX, startY, width, height) {
				ctx.moveTo(startX, startY);
				ctx.lineTo(startX + width, 0);
			}
			//开头
		drawColor(ctx, 0, 0, lineWidth / 2, 1);
		//结尾
		drawColor(ctx, maxWidth - (lineWidth / 2), 0, lineWidth / 2, 1);
		var startX = lineWidth / 2 + pading;
		//中间填充的线
		for(var i = 0; i < lineCount; i++) {
			drawColor(ctx, startX + (lineWidth + pading) * i, 0, lineWidth, 1);
		}
		ctx.stroke();
		return canvas.toDataURL("image/png");
	}
	/**
	 * @desc 生成数据表格
	 */
	var initBtrTable = function() {
			//初始化表格
			btrTable = new BtrTable({
				dom: $("#btrTable"),
				url: Base.qmServer + 'card/queryCardInfoByPage',
				toolbar: ".table_toolbar",
				showToggle: false,
				showExport: false,
				striped: false,
				showColumns: false,
				queryParams: function(params) {
					//获取查询参数
					var sParam = $.extend(true, {}, vModel ? vModel.form : {});
					//sParam.project_name = sParam.project_name ? sParam.project_name.join(",") : '';
					Trim(sParam);
					//合并查询参数和分页，排序参数
					return $.extend({
						'pageNum': params.offset / params.limit + 1,
						'pageSize': params.limit,
						'field': params.sort,
						'sort': params.order
					}, sParam);
				},
				columns: [{
					checkbox: true
				}, {
					field: 'card_info',
					title: '票券类型',
					width: '120px',
					formatter: function(value, index, row) {
						var card_info = eval("(" + value + ")");
						var name = card_info.name;
						return name;
					}
				}, {
					field: 'brand_name',
					title: '商户'
				}, {
					field: 'title',
					title: '票券标题'
				}, {
					field: 'addtime',
					title: '创建时间',
					sortable: true
				}, {
					title: '操作',
					align: 'center',
					formatter: function(value, index, row) {
						var obj = JSON.stringify(index);
						return '<div data-index=' + row + ' data-cardid="' + index.cardid + '" data-row=\'' + obj + '\' class="table-btn-list"><a class="abtn viewing" href="#">预览</a>&nbsp;&nbsp;<a class="abtn link" href="#">链接</a>&nbsp;&nbsp;<a class="abtn edit" href="#">编辑</a>&nbsp;&nbsp;<a class="abtn statistics" href="#">统计</a>&nbsp;&nbsp;<a class="abtn query" href="#">查询</a></div>'
					}

				}]
			});
		}
		/**
		 * @desc 加载卡券详情
		 * @param {Object} param
		 * @param {Object} callBack
		 */
	var loadCardInfo = function(param, callBack) {
		Ajax.request("card/getCardInfoByCardid", param, function(rep) {
			typeof callBack === 'function' && callBack.apply(this, arguments);
		});
	}

	/**
	 * 打开 卡券连接弹窗
	 * @param {Object} data
	 */
	var openLinkDialog = function(data) {
		var linkWarp = $('.coupon_link_warp');
		data.get_url && linkWarp.find('.js-get-url').val(data.get_url);
		data.view_url && linkWarp.find('.js-view-url').val(data.view_url);
		linkWarp.attr('cardid', data.cardid);
		//预览弹窗
		layer.open({
			type: 1,
			shade: false,
			title: "票券链接地址",
			area: ['390px', '230px'],
			content: $('.coupon_link_warp'), //捕获的元素
			cancel: function(index) {
				//退出时清空文本框
				linkWarp.find("input").val('');
				linkWarp.removeAttr('cardid');
			}
		});
	}
	var bindEvent = function() {
		//绑定日期控件
		$("#startTime").click(function() {
			WdatePicker.apply(this, [{
				maxDate: '#F{$dp.$D(\'endTime\');}'
			}]);
			return false;
		});
		$("#endTime").click(function() {
			WdatePicker.apply(this, [{
				minDate: '#F{$dp.$D(\'startTime\');}'
			}]);
			return false;
		});
		//导出全部
		$('.js-export-all').click(function() {
			//导出全部
			window.location.href = Base.qmServer + 'card/exportAllCard';
		});
		//删除票券
		$(".js-del-coupon").click(function() {

		});
		//新增票券
		$(".js-add-coupon").click(function() {

		});
		//保存连接地址
		$('.js-link-submit').click(function() {
			//获取被layer弹窗包裹的form表单
			var linkWarpDialog = $(".coupon_link_warp:visible"),
				getUrl = linkWarpDialog.find('.js-view-url'),
				viewUrl = linkWarpDialog.find('.js-view-url');
			getUrl = $.trim(getUrl);
			viewUrl = $.trim(viewUrl);
			if(!getUrl || !viewUrl) {
				layer.msg('票券领取地址和票券显示地址不能为空');
			}
			//保存领取地址和显示地址
			Ajax.request('card/updateCardUrl', {
				get_url: getUrl,
				view_url: viewUrl,
				cardid: linkWarpDialog.attr('cardid')
			}, function(rep) {
				//保存成功后关闭弹层,重新加载表格
				layer.closeAll();
				vModel.reset();
			})
		});
		var btrDomWarp = $("#btrTable");
		//票券预览
		btrDomWarp.on('click', '.viewing', function() {
			var cardid = $(this.parentElement).data('cardid');
			loadCardInfo({
				cardid: cardid
			}, function(rep) {
				if(!previewModel) {
					initPrivewModel(rep);
				} else {
					previewModel.$data = rep;
				}
				previewModel.$nextTick(function() {
					debugger
					//预览弹窗
					layer.open({
						type: 1,
						shade: false,
						title: "票券预览",
						area: ['460px', '530px'],
						content: $('.mobile_toast_warp'), //捕获的元素
						cancel: function(index) {}
					});
				});
			});
		});
		//链接
		btrDomWarp.on('click', '.link', function() {
			var index = $(this.parentElement).data("index"),
				row = btrTable.getData()[index];
			openLinkDialog(row);
		});
		//编辑
		btrDomWarp.on('click', '.edit', function() {

		});
		//查询
		btrDomWarp.on('click', '.query', function() {

		});
	}
	var init = function() {
		bindEvent();
		initModel();
		initBtrTable();
		//initPrivewModel();
	}
	init();
});