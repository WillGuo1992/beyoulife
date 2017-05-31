require(['jquery', 'layer', 'EasyDropdown', 'echarts', 'modules/common/tableOption', 'Ajax', 'Vue', 'WdatePicker', 'modules/common/echartoption/line', 'modules/common/echartoption/bar', 'modules/common/echartoption/pie'], function($, layer, EasyDropdown, echarts, BtrTable, Ajax, Vue, WdatePicker, lineOption, barOption, pieOption) {
	var vModel, defaultForm = {
		form: {
			startDate: '',
			endDate: '',
			channel_tag: '-1',
			type: '-1'
		},
		//时间按钮列表
		timeList: [{
			txt: "今天",
			type: "today"
		}, {
			txt: "昨天",
			type: "yesterday"
		}, {
			txt: "本周",
			type: "thisWeek"
		}, {
			txt: "最近一周",
			type: "nearWeek"
		}, {
			txt: "本月",
			type: "thisMonth"
		}, {
			txt: "最近一月",
			type: "nearMonth"
		}, {
			txt: "最近三月",
			type: "nearThreeMonth"
		}]
	};
	/**
	 * @desc 初始化搜索模型
	 */
	var initModel = function() {
			vModel = new Vue({
				el: "#sForm",
				data: defaultForm,
				methods: {
					changeTime: function(type) {
						this.$set('timeType', type);
						var dateMap = {
							//今天
							today: function() {
								var today = new Date().Format('yyyy-MM-dd');
								return [today, today];
							},
							//昨天
							yesterday: function() {
								var yesterday = new Date().getTime() - 3600 * 24 * 1000;
								yesterday = new Date(yesterday).Format('yyyy-MM-dd');
								return [yesterday, yesterday];
							},
							//本周
							thisWeek: function() {
								var now = new Date(),
									weekDay = now.getDay() - 1,
									startDate = now.getTime() - 3600 * 24 * 1000 * weekDay;
								startDate = new Date(startDate).Format('yyyy-MM-dd');
								return [startDate, now.Format('yyyy-MM-dd')];
							},
							//最近一周
							nearWeek: function() {
								var now = new Date(),
									startDate = now.getTime() - 3600 * 24 * 1000 * 7;
								startDate = new Date(startDate).Format('yyyy-MM-dd');
								return [startDate, now.Format('yyyy-MM-dd')];
							},
							//当前月
							thisMonth: function() {
								var now = new Date(),
									monthDay = now.getDate() - 1,
									startDate = now.getTime() - 3600 * 24 * 1000 * monthDay;
								startDate = new Date(startDate).Format('yyyy-MM-dd');
								return [startDate, now.Format('yyyy-MM-dd')];
							},
							//最近一个月
							nearMonth: function() {
								var startDate = new Date(),
									endDate = new Date();
								startDate.setMonth(startDate.getMonth() - 1);
								return [startDate.Format('yyyy-MM-dd'), endDate.Format('yyyy-MM-dd')]
							},
							//最近三个月
							nearThreeMonth: function() {
								var startDate = new Date(),
									endDate = new Date();
								startDate.setMonth(startDate.getMonth() - 3);
								return [startDate.Format('yyyy-MM-dd'), endDate.Format('yyyy-MM-dd')]
							}
						}
						var time = dateMap[type].apply(this, arguments);
						this.form.startDate = time[0]
						this.form.endDate = time[1];
						this.search();
					},
					search: function() {
						Ajax.request('subscribe/querySubscribeData', this.form, function(rep) {
							Chart.getInstance().setData(rep.result);
							brtTable.setData(rep.result);
						});
					}

				},
				//dom渲染完成后回调
				ready: function() {
					var that = this;
					//绑定下拉选框控件
					$("#catalogTag").easyDropDown({
						"cutOff": 10,
						onChange: function(obj) {
							that.form.channel_tag = obj.value;
						}
					});
					$("#fllowType").easyDropDown({
						"cutOff": 10,
						onChange: function(obj) {
							that.form.type = obj.value;
						}
					});
					//默认查询最近一个月的数据
					this.changeTime('nearMonth');
				}
			})
		}
		/**
		 * @desc 初始化时间选择器
		 */
	var initDatePicker = function() {
			$("#startTime").click(function() {
				WdatePicker.apply(this, [{
					maxDate: '#F{$dp.$D(\'endTime\');}',
					dchanged: dateChange
				}]);
				return false;
			});
			$("#endTime").click(function() {
				WdatePicker.apply(this, [{
					minDate: '#F{$dp.$D(\'startTime\');}',
					dchanged: dateChange
				}]);
				return false;
			});
			var dateChange = function() {
				vModel.timeType = '-1';
			}
		}
		/**
		 * @desc 加载类别标签
		 */
	var loadTags = function() {
			Ajax.request('channel/queryChannelTags', {}, function(rep) {
				defaultForm.chanelList = rep.result;
				initModel();
			});
		}
		//图表对象
	var Chart = function() {
		var chartType, ChartMap = {},
			ChartData;
		/**
		 * @desc 初始化图表
		 * @param {Object} dom
		 */
		var initChart = function(dom) {
				var styleFormat = function(param) {
					var htmlStr = '';
					//排序
					param.sort(function(a, b) {
						return b.value - a.value;
					});
					for(var i = 0, obj; obj = param[i++];) {
						if(i == 1) {
							htmlStr += obj.name + '<br>';
						}
						htmlStr += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + obj.color + '"></span>';
						htmlStr += (obj.seriesName == "undefined" ? "  " : obj.seriesName) + '：' + (obj.value || 0) + ' 个<br>';
					}
					return htmlStr;
				}
				var optionMap = {
					line: function() {
						return $.extend(true, lineOption, {
							title: {
								text: '公众号关注数据统计',
							},
							tooltip: {
								formatter: styleFormat
							},
							yAxis: {
								name: '数量',
								axisLabel: {
									formatter: '{value} 个'
								},
								boundaryGap: ['0', '5%']
							},
							grid: {
								x: 60,
								x2: 10
							}
						});
					},
					bar: function() {
						return $.extend(true, barOption, {
							title: {
								text: '公众号关注数据统计',
							},
							tooltip: {
								formatter: styleFormat
							},
							yAxis: {
								name: '数量',
								axisLabel: {
									formatter: '{value} 个'
								},
								boundaryGap: ['0', '5%']
							},
							grid: {
								x: 60,
								x2: 10
							}
						});
					},
					pie: function() {
						return $.extend(true, pieOption, {
							tooltip: {
								formatter: "{b}<br>{c}个：{d}%"
							},
							title: {
								text: '公众号关注数据统计'
							}
						});
					}
				}
				if(!ChartMap[chartType]) {
					ChartMap[chartType] = echarts.init(dom);
					ChartMap[chartType].setOption(optionMap[chartType]());
				}
				//渲染数据
				ChartData && renderChartData();
			}
			/**
			 * @desc绑定事件
			 */
		var bindEvent = function() {
			$('.js-chart-nav-btn').click(function() {
				var index = $(this).index(),
					dom = $('.chart').eq(index);
				dom.show().siblings().hide();
				chartType = $(this).data('type');
				initChart(dom[0]);
			}).eq(0).click();
		}
		var setData = function(data) {
				//格式化数据
				ChartData = formatData(data);
				renderChartData();
			}
			/**
			 * @desc 更新数据 
			 * @param {Object} data
			 */
		var renderChartData = function() {
			var data = ChartData;
			var dataMap = {
					'line': function() {
						var lineOption = ChartMap[chartType].getOption();
						lineOption.xAxis[0]["data"] = data.x;
						lineOption.legend[0].data = data.legend;
						lineOption.series = (function(array) {
							var data = [];
							for(var obj in array) {
								data.push({
									name: obj,
									type: 'line',
									data: array[obj]
								});
							}
							return data;
						})(data.bar);
						return lineOption;
						//ChartMap[chartType].setOption(lineOption, true);
					},
					'bar': function() {
						var barOption = ChartMap[chartType].getOption();
						barOption.xAxis[0]["data"] = data.x;
						barOption.legend[0].data = data.legend;
						barOption.series = (function(array) {
							var data = [];
							for(var obj in array) {
								data.push({
									name: obj,
									type: 'bar',
									data: array[obj]
								});
							}
							return data;
						})(data.bar);
						return barOption;
						//ChartMap[chartType].setOption(barOption, true);
					},
					'pie': function() {
						var pieOption = ChartMap[chartType].getOption();
						pieOption.legend[0].data = data.legend;
						pieOption.series[0].data = data.pie;
						return pieOption;
					}
				}
				//更新数据
			ChartMap[chartType].setOption(dataMap[chartType](), true);
		};
		/**
		 * @desc 格式化数据
		 * @param {Object} data
		 */
		var formatData = function(data) {
				var barData = {}, //柱状,折线图数据
					pieData = {}, //圆形图数据
					pieDataArray = [],
					lengendArr = [], //图例
					xArray = []; //x轴数据
				var xTime, xIndex;
				for(var i = 0, obj; obj = data[i++];) {
					lengendArr.push(obj.channel_tag);
					pieData[obj.channel_tag] = obj.countnum;
					for(var j = 0; j < obj.list.length; j++) {
						var row = obj.list[j];
						//如果是今天或者昨天 显示的是小时数
						if(vModel.form.startDate == vModel.form.endDate) {
							xTime = row['addtime'].split(" ")[1] + ':00';
						} else {
							xTime = row['addtime']
						}
						xIndex = xArray.indexOf(xTime);
						if(xIndex == -1) {
							xArray.push(xTime);
							xIndex = xArray.length - 1;
						}
						barData[obj.channel_tag] = barData[obj.channel_tag] || [];
						barData[obj.channel_tag][xIndex] = row.countnum;
					}
				}
				//生成饼图数据
				for(var pie in pieData) {
					pieDataArray.push({
						name: pie,
						value: pieData[pie]
					})
				}
				return {
					legend: lengendArr,
					pie: pieDataArray,
					bar: barData,
					x: xArray
				}
			}
			/**
			 * @desc 初始化图表
			 */
		var init = function() {
			bindEvent();
		}
		return {
			init: init,
			setData: setData
		}
	}
	Chart.getInstance = function() {
		if(!Chart.instance) {
			Chart.instance = new Chart();
		}
		return Chart.instance;
	}
	var brtTable = new BtrTable({
		dom: $("#btrTable"),
		sidePagination: 'client',
		showToggle: false,
		showExport: false,
		striped: false,
		showColumns: false,
		pagination: false,
		setHeight: function() {
			return 200;
		},
		columns: [{
			field: 'channel',
			title: '渠道名称',
			align: 'center'
		}, {
			field: 'datasource',
			title: '渠道标识',
			align: 'center'
		}, {
			field: 'channel_tag',
			title: '类别标签',
			align: 'center'
		}, {
			field: 'countnum',
			title: '统计数量',
			sortable: true,
			align: 'center'
		}]
	});
	var initPage = function() {
		loadTags();
		initDatePicker();
		Chart.getInstance().init();
	};
	initPage();
});