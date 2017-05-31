/**
 * 作者:金海宾
 * 时间:2016/9/1
 */
require(['jquery', 'layer', "echarts", "Vue", "Ajax", "HeatMap", "OpenLayer", "modules/common/echartoption/line", "modules/common/echartoption/pie", "modules/common/heatMapStyle"], function($, layer, echarts, Vue, Ajax, HM, ol, lineOption, pieOption, heatMapColor) {
	var baseServer = "http://op.beyoulsc.com/geoserver";
	var viewModel;
	/**
	 * @desc 计算页面元素大小
	 */
	var resizePage = function() {
		var padding = 15,
			width = $("body").width(),
			width1 = (width - (padding * 4)) / 3;
		console.log(width1);
		$(".gk_text").width(width1);
		$(".chart_b").width(width1 * 2 + padding);
		$(".chart_s").width(width1);
	};
	var bindEvent = function() {
			$(".js-tab").click(function() {
				var obj = $(this),
					index = obj.index();
				obj.addClass("active").siblings().removeClass('active');
				$('.single_panel').eq(index).show().siblings().hide();
				//标签页改变回调函数
				obj.trigger("change.tabs");
			}).bind("change.tabs", function() {
				//dom 在隐藏状态下无法获取宽高，所以只创建显示的图表
				$(".js-chart:visible").each(function() {
					//创建表格
					Chart.getInstance().initChart(this);
				});
			}).eq(0).click();
		}
		/**
		 * 图表对象
		 * @return {{setData: setData, initChart: initChart}}
		 * @constructor
		 */
	var Chart = function() {
		var ChartMap = {},
			defaultDataOption = {};
		/**
		 * @desc 图表 默认值
		 */
		var setDefaultOption = function() {
				lineOption = $.extend(true, lineOption, {
					tooltip: {
						formatter: function(param) {

							var htmlStr = '',
								name = '';
							//排序
							/*param.sort(function(a, b) {
								return b.value - a.value;
							});*/
							for(var i = 0, obj; obj = param[i++];) {
								if(i == 1) {
									name = obj.name || name;
								}
								htmlStr += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + obj.color + '"></span>';
								htmlStr += (obj.seriesName == "undefined" ? "  " : obj.seriesName) + '：' + (obj.value || 0) + ' 人<br>';
							}
							return htmlStr;
						}
					},
					legend: {
						y: 'bottom'
					},
					grid: {
						x: 60,
						x2: 10,
						y: 40,
						y2: 50
					},
					yAxis: {
						name: "单位/人",
						boundaryGap: ['0', '5%']
					}
				});
				pieOption = $.extend(true, pieOption, {
					title: {
						textStyle: {
							fontSize: 15
						}
					}
				});
			}
			/**
			 * @desc 获取图表的option对象
			 * @param type
			 * @return {*}
			 */
		var getChartOption = function(type) {
				var optionMap = {
					curVisitors: function() {
						var option = $.extend(true, {}, lineOption, {
							title: {
								text: "当前，昨日，上周今日场内客流总数"
							}
						});
						return option;
					},
					thisWeekLine: function() {
						var option = $.extend(true, {}, lineOption, {
							tooltip: {
								formatter: "{b}：{c}人"
							},
							title: {
								text: "一周客流数"
							}
						});
						return option
					},
					inLine: function() {
						var option = $.extend(true, {}, lineOption, {
							title: {
								text: "当前，昨日，上周今日上网数"
							}
						});
						return option;
					},
					vipInLine: function() {
						var option = $.extend(true, {}, lineOption, {
							title: {
								text: "当前，昨日，上周今日上网会员数"
							}
						});
						return option;
					},
					newlyCount: function() {
						var option = $.extend(true, {}, lineOption, {
							title: {
								text: "当前，昨日，上周今日新增上网人数"
							}
						});
						return option;
					},
					mobilePercent: function() {
						var option = $.extend(true, {}, pieOption, {
							title: {
								text: '今日，昨日，上周今日 手机/PC认证占比'
							}
						});
						return option;
					},
					vipPercent: function() {
						var option = $.extend(true, {}, pieOption, {
							title: {
								text: '今日，昨日，上周今日 上网会员/非会员人数占比'
							}
						});
						return option;
					},
					newlyPercent: function() {
						var option = $.extend(true, pieOption, {
							title: {
								text: '今日，昨日，上周今日 上网新增/回访人数占比'
							}
						});
						return option;
					}
				};
				return optionMap[type] ? (defaultDataOption[type] ? $.extend(optionMap[type].apply(this, arguments), defaultDataOption[type]) : optionMap[type].apply(this, arguments)) : null;
			}
			/**
			 * @desc 生成图表
			 * @param dom
			 * @return {*}
			 */
		var chartFactory = function(dom) {
				var chart = echarts.init(dom);
				chart.setOption(getChartOption(dom.id) || {});
				return chart;
			}
			/**
			 * @desc 设置图标数据
			 * @param type
			 * @param data
			 */
		var setData = function(type, data) {
			var chart = ChartMap[type],
				dataOption = chartDataProxy.apply(this, arguments);
			if(!chart) {
				return false;
			}
			var oldOption = chart.getOption(),
				newOption = $.extend(true, oldOption, dataOption);
			chart.setOption(newOption, true);
		}
		var chartDataProxy = function(type, data) {
			/**@desc 生成上网人数chart option对象
			 * @param {Object} data
			 */
			var inLineFormat = function(data) {
					var option = {
							legend: {
								y: 'bottom',
								data: []
							},
							xAxis: {
								data: (function() {
									var xArray = [],
										hours = 24;
									for(var i = 0; i <= hours; i++) {
										xArray.push(i);
									}
									return xArray;
								}())
							},
							series: []
						},
						dates;
					for(var i = 0; i < data.length; i++) {
						option.legend.data.push(data[i].date);
						dates = data[i].datas;
						for(var j = 0, len = dates.length; j < len; j++) {
							var index = option.xAxis.data.indexOf(dates[j].time)
							option.series[i] = option.series[i] || {
								name: data[i].date,
								type: 'line',
								data: []
							};
							option.series[i].data[index] = dates[j].count;
						}
					}
					return option;
				}
				/**
				 * @desc 环形图 option对象
				 * @param {Object} data
				 */
			var pieFormat = function(data) {
				var option = {
					legend: {
						x: 'left',
						y: 'bottom',
						orient: 'vertical',
						data: ["手机", "PC"]
					},
					series: []
				}
				for(var i = 0; i < data.length; i++) {
					//option.legend.data.push(data[i].date);
					option.series[i] = {
						name: "占比",
						type: 'pie',
						selectedMode: 'single',
						radius: (function(index) {
							if(index == 0) {
								return [0, "30%"]
							}
							if(index == 1) {
								return ["40%", "55%"]
							}
							if(index == 2) {
								return ["65%", "75%"]
							}
						}(i)),
						label: {
							normal: (function(index) {
								if(index != 2) {
									return {
										position: 'inner'
									};
								}
								return {}
							})(i)
						},
						labelLine: {
							normal: {
								show: (function(index) {
									if(index != 2) {
										return false;
									}
									return true;
								})(i)
							}
						},
						data: [{
							value: data[i].mobileAuthCount,
							name: "手机"
						}, {
							value: data[i].pcAuthCount,
							name: "PC"
						}]
					}
				}
				return option;
			}
			var getData = {
				curVisitors: function(data) {
					//按照line 图表option 对象的格式拼装  图例，X轴 ，值  然后跟图表现有的option对象合并
					var option = {
							legend: {
								y: 'bottom',
								data: []
							},
							xAxis: {
								data: (function() {
									var xArray = [],
										hours = 24,
										minutes = 60,
										hour, minute;
									for(var i = 0; i <= hours; i++) {
										hour = i < 10 ? '0' + i : i;
										minute = 0;
										for(var j = 0; j < 60; j += 5) {
											minute = j < 10 ? '0' + j : j;
											xArray.push(hour + ':' + minute);
										}
									}
									return xArray;
								}())
							},
							series: []
						},
						dates;
					for(var i = 0; i < data.length; i++) {
						option.legend.data.push(data[i].date);
						dates = data[i].datas;
						for(var j = 0, len = dates.length; j < len; j++) {
							var index = option.xAxis.data.indexOf(dates[j].datetime)
							option.series[i] = option.series[i] || {
								name: data[i].date,
								type: 'line',
								data: []
							};
							option.series[i].data[index] = dates[j].count;
						}
					}
					return option;
				},
				thisWeekLine: function(data) {
					var option = {
						xAxis: {
							data: []
						},
						series: [{
							type: 'line',
							data: []
						}]
					}
					for(var i = 0; i < data.length; i++) {
						option.xAxis.data.push(data[i].datetime);
						option.series[0].data.push(data[i].count);
					}
					return option;
				},
				inLine: function(data) {
					return inLineFormat(data);
				},
				vipInLine: function(data) {
					return inLineFormat(data);
				},
				newlyCount: function(data) {
					return inLineFormat(data);
				},
				mobilePercent: function(data) {
					return pieFormat(data);
				},
				vipPercent: function(data) {
					return pieFormat(data);
				},
				newlyPercent: function(data) {
					return pieFormat(data);
				}
			};
			var option = getData[type](data);
			defaultDataOption[type] = option;
			return getData[type](data);
		}

		/**
		 * @desc 初始化图表
		 * @param dom
		 * @return {boolean}
		 */
		var initChart = function(dom) {
			if(ChartMap[dom.id]) {
				return false;
			}
			ChartMap[dom.id] = chartFactory(dom);
		}
		setDefaultOption();
		return {
			setData: setData,
			initChart: initChart
		}
	}
	var initViewModel = function() {
			viewModel = new Vue({
				el: document.body,
				data: {
					todayDate: new Date().Format('yyyy-MM-dd'),
					today: {},
					yesterday: {},
					beforeSeven: {},
					yesterdayTj: {},
					inLineVipCount: 0,
					inLineCount: 0,
					todayAuthCount: '',
					todayNewAuth: '',
					todayAddCount: '',
					todayCallbackCount: ''
				}
			});
		}
		/**
		 * @desc 加载页面数据
		 */
	var loadData = function() {
		var beforeSeven = new Date(new Date().getTime() - 3600 * 24 * 1000 * 7),
			yesterday = new Date(new Date().getTime() - 3600 * 24 * 1000),
			now = new Date();
		beforeSeven = beforeSeven.Format("yyyy-MM-dd");
		now = now.Format("yyyy-MM-dd");
		yesterday = yesterday.Format("yyyy-MM-dd");
		//获取当前商场内客流人数
		Ajax.requestWifi("wifiData/countCovering", {
			dates: now + ',' + yesterday + ',' + beforeSeven
		}, function(rep) {
			// time=2016-09-05 16:25~2016-09-05 16:30
			var time = rep.result.time.split("~");
			time[1] = time[1].substr(time[1].length - 5, time[1].length);
			rep.result.time = time.join("-");
			viewModel.$set("today", rep.result);
		});
		//获取  昨日  上周今日客流总数
		Ajax.requestWifi("wifiData/countCoveringByDates", {
			dates: yesterday + ',' + beforeSeven
		}, function(rep) {
			viewModel.$set("yesterday", rep.result[0]);
			viewModel.$set("beforeSeven", rep.result[1]);
		});
		//获取昨日途径客流数; 
		Ajax.requestWifi("wifiData/countCoveroutByDate", {
			date: yesterday
		}, function(rep) {
			viewModel.$set("yesterdayTj", rep.result);
		});
		//今天,昨天，上周的今天 五分钟人流数量
		Ajax.requestWifi("wifiData/countCoverDataBy5Min", {
			dates: now + ',' + yesterday + ',' + beforeSeven
		}, function(rep) {
			Chart.instance.setData('curVisitors', rep.result);
		});
		//最近一周人流数据
		Ajax.requestWifi("wifiData/countCoverData", {
			startDate: beforeSeven,
			endDate: now
		}, function(rep) {
			Chart.instance.setData('thisWeekLine', rep.result);
		});
		//今天,昨天，上周今日的上网人数
		Ajax.requestWifi("wifiData/queryHourLinksByDates", {
			dates: now + ',' + yesterday + ',' + beforeSeven
		}, function(rep) {
			Chart.instance.setData('inLine', rep.result);
		});
		//今天,昨天，上周今日的会员上网人数
		Ajax.requestWifi("wifiData/queryHourLinkMembersByDates", {
			dates: now + ',' + yesterday + ',' + beforeSeven
		}, function(rep) {
			Chart.instance.setData('vipInLine', rep.result);
		});
		//今天,昨天，上周今日的新增上网人数
		Ajax.requestWifi("wifiData/queryHourNewLinksByDates", {
			dates: now + ',' + yesterday + ',' + beforeSeven
		}, function(rep) {
			Chart.instance.setData('newlyCount', rep.result);
		});
		//今天,昨天，上周今日的PC认证占比
		Ajax.requestWifi("wifiData/countAuthGroupTypeByDates", {
			dates: beforeSeven + ',' + yesterday + ',' + now
		}, function(rep) {
			Chart.instance.setData('mobilePercent', rep.result);
		});
		//今天,昨天，上周今日的PC认证占比
		Ajax.requestWifi("wifiData/countLinksGroupMemberByDates", {
			dates: beforeSeven + ',' + yesterday + ',' + now
		}, function(rep) {
			Chart.instance.setData('vipPercent', rep.result);
		});
		//今天,昨天，上周今日的PC认证占比
		Ajax.requestWifi("wifiData/countLinksGroupNewAndCallbackByDates", {
			dates: beforeSeven + ',' + yesterday + ',' + now
		}, function(rep) {
			Chart.instance.setData('newlyPercent', rep.result);
		});
		//当前上网人数
		Ajax.requestWifi("wifiData/countLinking", {

		}, function(rep) {
			viewModel.$set("inLineCount", rep.result);
		});
		//当前上网人数其中会员人数
		Ajax.requestWifi("wifiData/countLinkingMember", {}, function(rep) {
			viewModel.$set("inLineVipCount", rep.result);
		});
		//今日新增,回访上网人数
		Ajax.requestWifi("wifiData/todayNewAndCallbackLink", {}, function(rep) {
			viewModel.$set("todayAddCount", rep.result.addcount);
			viewModel.$set("todayCallbackCount", rep.result.callbackcount);
		});
		//今日上网认证人数
		Ajax.requestWifi("wifiData/todayNewAuth", {}, function(rep) {
			viewModel.$set("todayNewAuth", rep.result);
		});
		//今日上网认证次数
		Ajax.requestWifi("wifiData/todayAuthCount", {}, function(rep) {
			viewModel.$set("todayAuthCount", rep.result);
		});
	}
	var Map = function() {
		var map, _default = {
			target: "map",
			zoom: 19,
			roate: 0,
			maxZoom: 21,
			minZoom: 18,
			center: [116.461622, 39.968221]
		}
		var initMap = function() {
				var overlay = new ol.Overlay( /** @type {olx.OverlayOptions} */ ({
					element: document.getElementById("pop"),
					autoPan: false,
					autoPanAnimation: {
						duration: 250
					}
				}));
				map = new ol.Map({
					interactions: ol.interaction.defaults().extend([
						new ol.interaction.DragRotateAndZoom()
					]),
					target: _default.target,
					layers: [
						new ol.layer.Tile({
							source: new ol.source.XYZ({
								url: 'http://webrd03.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
							})
						})
					],
					overlays:[overlay],
					view: new ol.View({
						center: ol.proj.fromLonLat(_default.center),
						projection: "EPSG:900913",
						displayProjection: "EPSG:4326",
						zoom: _default.zoom,
						maxZoom: _default.maxZoom,
						minZoom: _default.minZoom
					})
				});
				//地图偏转
				map.getView().setRotation(_default.roate * Math.PI * 2 / 360);
				overlay.setPosition(_default.center);
			}
			/**
			 * @description 添加图层
			 */
		var addLayers = function() {
				map.layers = {
					'brIndoorOne': new ol.layer.Image({
						source: new ol.source.ImageWMS({
							ratio: 1,
							url: baseServer + '/brworld/wms',
							visible: false,
							params: {
								'FORMAT': 'image/png',
								'VERSION': '1.1.1',
								LAYERS: 'brworld:br1',
								STYLES: ''
							}
						})
					}),
					'brIndoorTwo': new ol.layer.Image({
						source: new ol.source.ImageWMS({
							ratio: 1,
							url: baseServer + '/brworld/wms',
							params: {
								'FORMAT': 'image/png',
								'VERSION': '1.1.1',
								LAYERS: 'brworld:br2',
								STYLES: ''
							}
						}),
						visible: false
					}),
					'vectorLayer': new ol.layer.Vector({}),
					'pointLayer': new ol.layer.Vector({
						style: new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: '#333'
								})
							})
						}),
						zIndex: 100
					})
				};
				$.each(map.layers, function(i, n) {
					var _self = this;
					map.addLayer(_self);
				});
			}
			/**
			 * @description 移除地图元素
			 */
		var removeMapEle = function() {
				$(".ol-rotate-reset").remove();
				setTimeout(function() {
					$('.ol-logo-only').remove();
				}, 1000);
			}
			/**
			 * @description 注册事件
			 */
		var registerEvent = function(eventName, callBack) {
				map.on(eventName, callBack);
			}
			/**
			 * @description 获取地图对象
			 */
		var getMap = function() {
				if(map) {
					return map;
				}
				return;
			}
			/**
			 * @description 获取地图图层
			 * @param {Object} layerName
			 */
		var getLayer = function(layerName) {
				if(map.layers[layerName]) {
					return map.layers[layerName];
				}
				return false;
			}
			/**
			 * @description 初始化
			 */
		var init = function(option) {
			_default = $.extend(_default, option);
			initMap();
			addLayers();
			removeMapEle();
		}
		return {
			registerEvent: registerEvent,
			getMap: getMap,
			getLayer: getLayer,
			init: init
		}
	};
	/**
	 * @description 热图
	 */
	var HeatMap = function() {
		var dom, heatMapObj,
			_defaultOption = {
				map: null,
				width: 3840,
				height: 2160,
				radius: [16, 32, 64, 128, 256],
				gradient: [],
				maxOpacity: 0.6
			};
		/**
		 * @description 创建热图容器dom对象
		 */
		function createDom() {
			var size = getMapSize(),
				mapWidth = size['width'],
				mapHeight = size['height'];
			dom = document.createElement("div");
			dom.id = "heatmap_div_loc";
			dom.style.cssText = "position:absolute;";
			dom.style.zIndex = 99;
			//resize()
			//将生成的heatmap图层添加到地图当中
			$('.ol-viewport').append(dom);
		}
		/**@description 设置热图容器位置
		 * @param {Object} top  距离地图容器顶部距离
		 * @param {Object} left 距离地图容器左边框位置
		 */
		var setPosition = function(top, left) {
				dom.style.top = top + "px";
				dom.style.left = left + "px";
			}
			/**
			 * @description 初始化热图控件
			 */
		var initHeatMap = function() {
				var config = {
					container: dom,
					maxOpacity: _defaultOption.maxOpacity,
					gradient: _defaultOption.gradient,
				};
				heatMapObj = HM.create(config);
			}
			/**@description 填充热图展示数据
			 * @param {Object} data
			 */
		var setData = function(data) {
				var pxy, px, py, multiple, points = [],
					//radius = config.heatMap.radius,
					radius = _defaultOption.radius,
					radiu = radius[_defaultOption.map.getView().getZoom() - 18];
				for(var xy in data) {
					pxy = xy.split(',');
					px = pxy[0] * 1;
					py = pxy[1] * 1;
					//console.log(px + ',' + px);
					multiple = data[xy];
					points.push({
						x: px,
						y: py,
						value: multiple,
						radius: radiu
					});
				}
				heatMapObj.setData({
					max: 30,
					min: 0,
					data: points
				});
			}
			/**
			 * @description 隐藏热图
			 */
		var hide = function() {
				dom.style.display = 'none';
			}
			/**
			 * @description 更新热图位置
			 */
		var resize = function() {
				/*	var mapWidth = size[0],
						mapHeight = size[1];
					dom.style.top = 0 - (mapHeight / 2) + 'px';
					dom.style.left = 0 - (mapWidth / 2) + "px"
					dom.style.width = mapWidth * 2 + "px";
					dom.style.height = mapHeight * 2 + "px";*/
			}
			/**
			 * @description 显示热图
			 */
		var show = function() {
				dom.style.display = 'block';
			}
			/**
			 * @description ajax加载加载热图数据
			 */
		var refresh = function(param) {
				var size = getMapSize(),
					width = size['width'],
					height = size['height'],
					level = _defaultOption.map.getView().getZoom(),
					center = ol.proj.transform(_defaultOption.map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
				center = center[0] + ',' + center[1];
				param = param || {};
				param = $.extend(param, {
					width: _defaultOption.width,
					height: _defaultOption.height,
					zone: level,
					center: center,
					dataType: 'px'
				});
				//隐藏热图
				//hide();
				var _this = this;
				/*Ajax.request("heatmap/queryHeatMap", param, function(response) {
					setData(response.result.lonlat);
					_this.show();
				});*/
			}
			/**
			 * @description 获取地图尺寸
			 */
		var getMapSize = function() {
				var size = _defaultOption.map.getSize();
				return {
					width: size[0],
					height: size[1]
				}
			}
			/**
			 *@description 初始化热图 
			 * @param {Object} mapObj
			 */
		var init = function(option) {
				if(!option.map) {
					throw "请设置地图对象";
				}
				_defaultOption = $.extend(_defaultOption, option);
				createDom();
				initHeatMap();
				//refulsh();
			}
			//暴漏外部调用方法
		return {
			refresh: refresh,
			hide: hide,
			show: show,
			setPosition: setPosition,
			resize: resize,
			init: init
		}
	}
	var initHeatMap = function() {
		var mapInstance = Map.getInstance();
		//地图初始化
		mapInstance.init({
			target: "heatMap", //地图容器对象
			roate: 49.5, //地图偏转角度
			zoom: 18, //默认层级
			maxZoom: 21,
			minZoom: 18,
			center: [116.461622, 39.968221] //中心点
		});
		var mapObj = mapInstance.getMap(),
			mapView = mapObj.getView();
		//地图移动结束事件
		mapObj.on('moveend', function() {
			/*var center = map.getView().getCenter();
			curCenter = map.getPixelFromCoordinate(center);*/
			HeatMap.getInstance().refresh();
		});
		var oldCenter = [0, 0];
		//地图移动事件
		mapView.on('change:center', function(evt) {
			var b = mapView.calculateExtent(mapObj.getSize());
			var curCenter = ol.extent.getCenter(mapView.calculateExtent(mapObj.getSize()));
			curCenter = mapObj.getPixelFromCoordinate(curCenter);
			console.log((curCenter[0] - oldCenter[0]) + ',' + (curCenter[1] - oldCenter[1]));
			oldCenter = curCenter;
			HeatMap.getInstance().hide();
		});
		var geolocation = new ol.Geolocation({
			projection: "EPSG:4326",
			tracking: true
		});
		mapObj.on('precompose', function(evt) {
			console.log(geolocation.getPosition());
		});
		//热图初始化
		HeatMap.getInstance().init({
			map: Map.getInstance().getMap(), //地图对象
			gradient: heatMapColor //颜色样式
		});
	}
	$.each([Chart, Map, HeatMap], function() {
		$.extend(this, {
			getInstance: function() {
				if(!this.instance) {
					this.instance = new this();
				}
				return this.instance;
			}
		});
	});
	/**
	 * @desc 初始化
	 */
	var init = function() {
		initViewModel();
		resizePage();
		initHeatMap();
		bindEvent();
		loadData();
	}
	init();
})