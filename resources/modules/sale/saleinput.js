require(['jquery', 'layer', 'Ajax', 'modules/sale/bootstrap-datetimepicker', 'modules/common/upload', 'modules/common/tableOption'], function($, layer, Ajax, DatePicker, Uploader, BtrTable) {
	/**
	 * @description 日期控件
	 */
	var DatePicker = function() {
			var hasDateArray = [],
				inputDom = $('#datetimepicker');
			/**
			 * @description 初始化日期选择控件
			 */
			var initDatePicker = function() {
					inputDom.datetimepicker({
						format: 'yyyy-MM-dd',
						container: '.sale-datepicker',
						language: 'zh-CN',
						minView: '2',
						maxView: '3',
						endDate: new Date()
					}).on("changeDate", function(event) {
						$('.cur-time').text(event.date.Format('yyyy-MM-dd'));
						inputDom.val(event.date.Format('yyyy-MM-dd'));
						Radios.setDefault();
						//点击日期后，日期控件dom不会立即刷新，所以延时更新dom样式
						setTimeout(function() {
							updateDayStyle();
						}, 100);
					}).on("changeMonth", function(event) {
						//切换月份时获取当前月份有数据日期集合
						loadHaveDataDay(event.date.Format('yyyy-MM'));
					}).on("next:month", function(event) {
						loadHaveDataDay(event.date.Format('yyyy-MM'));
					}).on("prev:month", function(event) {
						loadHaveDataDay(event.date.Format('yyyy-MM'));
					});
				}
				/**
				 * @description 加载指定月份有数据的日期
				 * @param {Object} date yyyy-MM
				 */
			var loadHaveDataDay = function(date) {
					hasDateArray = [];
					Ajax.request('sell/querySumSellByMonth', {
						month: date
					}, function(data) {
						var result = data.result;
						for(var i = 0, len = result.length; i < len; i++) {
							var time = result[i].entertime
							hasDateArray.push(time);
						}
						updateDayStyle();
					});
				}
				/**
				 * @description 更新日期选择器 有数据日期的样式
				 */
			var updateDayStyle = function() {
					for(var i = 0, len = hasDateArray.length; i < len; i++) {
						var dom = queryDayDom(hasDateArray[i]);
						dom.length > 0 && dom.addClass('hasData');
					}
				}
				/**
				 * @description 选择日期在datepicker控件中对应的 dom对象
				 * @param {Object} date yyy-MM-dd
				 */
			var queryDayDom = function(date) {
					var time = date.substr(5, 5);
					return $(".day[data-day=" + time + "]");
				}
				/**
				 * @description 拓展datepicker 语言选项，支持中文
				 */
			var extendLange = function() {
					$.fn.datetimepicker.dates['zh-CN'] = {
						days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
						daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
						daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
						months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
						monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
						today: "今天",
						suffix: [],
						meridiem: ["上午", "下午"],
						rtl: false // 从右向左书写的语言你可以使用 rtl: true 来设置
					};
				}
				/**
				 * @description 获取当前选中日期
				 */
			var getSelectDate = function() {
					return inputDom.val();
				}
				/**
				 * @description 当前选中时间是否有数据
				 */
			var isHaveData = function() {
					var dom = $('.datetimepicker').find('.active');
					if(dom.hasClass('hasData')) {
						return true;
					}
					return false;
				}
				/**
				 * @description
				 */
			var refresh = function() {
				inputDom.datetimepicker('remove');
				//$('.sale-datepicker').empty();
				init();
			};

			/**
			 * @description 初始化
			 */
			var init = function() {
				extendLange();
				initDatePicker();
				loadHaveDataDay(new Date().Format('yyyy-MM'));
				$('.cur-time').text(new Date().Format('yyyy-MM-dd'));
				inputDom.val(new Date().Format('yyyy-MM-dd'));
				inputDom.datetimepicker('update');
			}
			return {
				isHaveData: isHaveData,
				getSelectDate: getSelectDate,
				loadHaveDataDay: loadHaveDataDay,
				refresh: refresh,
				init: init
			}
		}
		/**
		 * @description 获取日期组件实例
		 */
		/*DatePicker.getInstance = function() {
				if (!this.instance) {
					this.instance = new DatePicker();
				}
				return this.instance;
			}*/
		/**
		 * @description 表格
		 */
	var Table = function() {
			var btrTable, domId = "btrTable";
			/**
			 * @description 创建bootstrap表格对象
			 */
			var createTable = function() {
					btrTable = new BtrTable({
						dom: $("#" + domId),
						sidePagination: 'client',
						striped: true, //是否显示行间隔色
						cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
						pagination: false, //是否显示分页（*）
						sortable: false, //是否启用排序
						strictSearch: true,
						showColumns: false, //是否显示所有的列
						showRefresh: false, //是否显示刷新按钮
						minimumCountColumns: 2, //最少允许的列数
						clickToSelect: false, //是否启用点击选中行
						uniqueId: "name", //每一行的唯一标识，一般为主键列
						showToggle: false, //是否显示详细视图和列表视图的切换按钮
						cardView: false, //是否显示详细视图
						detailView: false, //是否显示父子表
						showExport: false,
						columns: [{
							title: '序号',
							align: 'center',
							formatter: function(value, row, index) {
								return index + 1;
							}
						}, {
							field: 'store_name',
							title: '商户名称/标签',
							align: 'center',
							formatter: function(value, row, index) {
								return value || '';
							}
						}, {
							field: 'sale_money',
							title: '销售额(元)',
							align: 'right',
							editable: true,
							formatter: function(value, row, index) {
								value = value || 0;
								return value.toFixed(2);
							}
						}, {
							field: 'kdcount',
							title: '客单数',
							align: 'right',
							editable: true,
							formatter: function(value, row, index) {
								return value || 0;
							}
						}, {
							field: 'klcount',
							title: '客流数',
							align: 'right',
							editable: true,
							formatter: function(value, row, index) {
								return value || 0;
							}
						}]
					});
				}
				/**
				 * @description 设置图标数据
				 * @param {Object} result
				 */
			var setData = function(result) {
				result = result || {};
				btrTable.setData(result);
			};
			/**
			 * @description 获取bootstrap 表格数据
			 */
			var getData = function() {
					return btrTable.getDom().bootstrapTable('getData');
				}
				/**
				 * @description 继承editable option对象,注入数据效验方法
				 */
			var extendEditableOption = function() {
				$.fn.editable.defaults = $.extend($.fn.editable.defaults, {
					"validate": function(value) {
						var editInput = $('.editable-input'),
							dom = editInput.closest("td").find('a'),
							name = dom.data('name');
						value = $.trim(value);
						if(name == "sale_money") {
							return validateSaleCount(value);
						}
						if(name == "klcount" || name == "kdcount") {
							return validateKLCount(value);
						}
					}
				});
			};
			/**
			 * @description 效验销售额
			 * @param {Object} value
			 */
			var validateSaleCount = function(value) {
				var reg = /^\d+(\.\d{1,2})?$/,
					flag = false;
				//判断值是否全都是0
				if(!reg.test(value)) {
					return "数据不合法";
				}
				//不包含小数点的情况下不能以0开头
				if(value.length > 1 && value.indexOf('.') == -1 && value.charAt(0) == '0') {
					return "数据不合法";
				}
				if(value.indexOf('.') == -1) {
					return "销售额必须包含两位小数";
				}
				if(value.split(".")[1].length != 2) {
					return "销售额必须包含两位小数";
				}
				return "";
			};
			/**
			 * @description效验客流数客单数
			 * @param {Object} value
			 */
			var validateKLCount = function(value) {
				var reg = /^\d+$/;
				if(!reg.test(value)) {
					return "数据不合法";
				}
				if(value.length > 1 && value.charAt(0) == '0') {
					return "数据不合法";
				}
				return "";
			};
			/**
			 * @description 刷新表格
			 */
			var refresh = function() {
					btrTable && btrTable.getDom().bootstrapTable('destroy');
					createTable();
				}
				/**
				 * @description绑定事件
				 */
			var bindEvent = function() {}
			var init = function() {
				extendEditableOption();
				createTable();
			}
			init();
			return {
				setData: setData,
				getData: getData,
				refresh: refresh,
				init: init
			}
		}
		/**
		 * @description 单选框对象
		 */
	var Radios = {
		value: 1,
		init: function() {
			$('.frm_radio_label').click(function() {
				var obj = $(this),
					iconRadio = obj.find('.icon_radio');
				$('.icon_radio').removeClass('selected');
				iconRadio.addClass('selected');
				Radios.value = obj.data('value');
			});
		},
		setDefault: function() {
			$('.frm_radio_label').eq(0).click();
		}
	}
	var Upload = function() {
		var uploadExcel, saleData = [];
		var bindUploader = function() {
			uploadExcel = new Uploader({
				server: Base.qmServer + "sell/parseSellExcel",
				pick: "#chooseFile",
				accept: {
					title: 'Excel',
					extensions: 'xls',
					mimeTypes: 'application/vnd.ms-excel'
				},
				fileSingleSizeLimit: 3 * 1024 * 1024,
				uploadSuccess: function(arg) {
					var file = arg[0],
						response = arg[1];
					$("#fileName").text(file.name).css('display', 'inline-block');
					//显示表格
					saleData = response.result;
				},
				uploadError: function(file, response) {
					$(".error-info").show().text("上传失败:" + error + '-error');
				}
			});
		}
		var bindEvent = function() {
			//模板下载
			$(".downTempl").click(function() {
				window.location.href = Base.qmServer + "/sell/downloadModel";
			});
			$('.chooseFile').click(function() {
				$('.error-info').empty();
			});
		};
		var refresh = function() {
			$("#fileName").empty().hide();
			saleData = [];
			uploadExcel && uploadExcel.destroy();
			bindUploader();
		}
		var init = function() {
			bindUploader();
			bindEvent();
		}
		var getData = function() {
			return saleData;
		}
		init();
		return {
			refresh: refresh,
			getData: getData
		}
	};

	/**
	 * @description 内容切换
	 */
	var Panel = function() {
		var panelIndex = 0,
			defaultData, curSaleData;
		/**
		 * @description返回
		 */
		var goBack = function() {
				if(panelIndex != 0) {
					showPanel(0);
				}
			}
			/**
			 * @description 选择日期后的下一步
			 */
		var nextFirstBtn = function() {
				var radioValue = Radios.value;
				if(radioValue == 1) {
					showPanel(1);
				}
				if(radioValue == 2) {
					var pickerInstance = DatePicker.getInstance();
					//如果选中日期没有数据则加载默认的数据
					if(pickerInstance.isHaveData()) {
						loadDataByDate(pickerInstance.getSelectDate(), function(data) {
							if(data.result.length == 0) {
								loadDefualt();
							} else {
								renderData(data.result);
							}
						});
					} else {
						loadDefualt();
					}
					showPanel(2);
				}

			}
			/**
			 * @description 文件上传后的下一步
			 */
		var nextSecondBtn = function() {
				var saleData = Upload.getInstance().getData(),
					datePicker = DatePicker.getInstance();
				var setTableData = function(data) {
					Table.getInstance().setData(saleData);
					showPanel(2);
				};
				if(saleData.length == 0) {
					layer.msg("请先上传数据文件");
					return false;
				};
				//判断选择日期是否有数据
				if(datePicker.isHaveData()) {
					//在已经有数据的情况下将数据ID匹配到新上传的数据当中
					loadDataByDate(datePicker.getSelectDate(), function(data) {
						var result = data.result;
						for(var i = 0, len = result.length; i < len; i++) {
							var obj = result[i];
							for(var j = 0; j < saleData.length; j++) {
								if(saleData[j].store_name == obj.store_name) {
									saleData[j].id = obj.id;
								}
							}
						}
						setTableData(saleData);
					});
				} else {
					setTableData(saleData);
				}
			}
			/**
			 * @description 数据保存
			 */
		var saveBtn = function() {
				var data = Table.getInstance().getData(),
					sellInfoList = {},
					index = 0;
				var uploadDate = DatePicker.getInstance().getSelectDate();
				$.each(data, function() {
					sellInfoList['sellInfoList[' + index + '].id'] = this.id || '';
					sellInfoList['sellInfoList[' + index + '].store_name'] = this.store_name;
					sellInfoList['sellInfoList[' + index + '].sale_money'] = this.sale_money || '0';
					sellInfoList['sellInfoList[' + index + '].kdcount'] = this.kdcount || '0';
					sellInfoList['sellInfoList[' + index + '].klcount'] = this.klcount || '0';
					sellInfoList['sellInfoList[' + index + '].entertime'] = uploadDate;
					index++;
				});
				Ajax.request('sell/saveSellData', sellInfoList, function(data) {
					if(data.code == 0) {
						layer.msg('保存成功');
						setTimeout(function() {
							DatePicker.getInstance().loadHaveDataDay(new Date(uploadDate).Format('yyyy-MM'));
							goBack();
						}, 1000);

					}
				})
			}
			/**
			 * @description 加载默认数据
			 */
		var loadDefualt = function() {
				//如果已经存在了就直接渲染
				if(!defaultData) {
					Ajax.request('store/queryStoreList', {}, function(data) {
						if(data.code == 0) {
							defaultData = data.result;
							for(var i = 0; i < defaultData.length; i++) {
								delete defaultData[i]['id'];
							}
							renderData(defaultData);
						}
					})
				} else {
					renderData(defaultData);
				}

			}
			/**
			 * description 查询指定日期的销售数据
			 * @param {Object} time  yyyy-MM-dd
			 */
		var loadDataByDate = function(time, callBack) {
				Ajax.request('sell/querySellDataByDate', {
					date: time
				}, function(data) {
					if(data.code == 0) {
						callBack(data);
					}
				})
			}
			/**
			 * @description 渲染表格数据
			 * @param {Object} result
			 */
		var renderData = function(result) {
			Table.getInstance().setData(result);
		}
		var showPanel = function(index) {
			/*	if (index == 0) {
					DatePicker.getInstance().refresh();
				}*/
			if(index == 1) {
				Upload.getInstance().refresh();
			}
			panelIndex = index;
			$('.single-panel').eq(index).show().siblings().hide();
		}
		var bindEvent = function() {
			$('.nextFisBtn').click(nextFirstBtn);
			$('.nextSecondBtn').click(nextSecondBtn);
			$('.saveBtn').click(function() {
				layer.confirm('确认保存数据吗？', {
					btn: ['确认', '取消'],
				}, function() {
					saveBtn();
					layer.closeAll();
				}, function() {
					layer.closeAll();
				});
			});
			$('.go_back').click(goBack);
			//返回顶部功能
			var SiteGoTopBtn = $('#SiteGoTopBtn');
			var SiteGoTopBox = SiteGoTopBtn.parent();
			SiteGoTopBtn.click(function() {
				$('html, body').stop(true, false).animate({
					scrollTop: 0
				}, 400);
			});
			//TODO 屏幕滚动事件要触发的js逻辑
			$(window).scroll(function() {
				try {
					if($(window).scrollTop() > 0) {
						SiteGoTopBox.show();
					} else {
						SiteGoTopBox.hide();
					}
				} catch(ex) {

				}
			});
		}
		var init = function() {
			bindEvent();
		}
		init();
		return {
			showPanel: showPanel
		}
	}
	$.each([DatePicker, Upload, Table, Panel], function() {
		$.extend(this, {
			getInstance: function() {
				if(!this.instance) {
					this.instance = new this();
				}
				return this.instance;
			}
		});
	});
	//初始化页面
	DatePicker.getInstance().init(), Panel.getInstance(), Upload.getInstance(), Radios.init();
});