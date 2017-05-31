//geoserver请求地址
var baseServer = "http://op.beyoulsc.com/geoserver";
//按钮事件
var ButtonEvent = {
		//显示一层室内图
		"brOne": function() {
			var mapInstance = Map.getInstance(),
				brOne = mapInstance.getLayer("brIndoorOne"),
				brTwo = mapInstance.getLayer("brIndoorTwo"),
				vectorLayer = mapInstance.getLayer("vectorLayer");
			brOne.setVisible(true);
			brTwo.setVisible(false);
			$(this).addClass('active').siblings().removeClass('active');
			renderMap();
			//判断resource是否已经加载过，如果已经加载过从缓存中读取
			if (ButtonEvent['brOneResource']) {
				vectorLayer.setSource(ButtonEvent['brOneResource']);
				return false;
			}
			loadWFS({
				typeName: 'brworld:br1'
			}, function(data) {
				ButtonEvent['brOneResource'] = getVectorSource(data.features || []);
				vectorLayer.setSource(ButtonEvent['brOneResource']);
			});
		},
		floorChange: function() {

		},
		//显示二层室内图
		"brTwo": function() {
			var mapInstance = Map.getInstance(),
				brOne = mapInstance.getLayer("brIndoorOne"),
				brTwo = mapInstance.getLayer("brIndoorTwo"),
				vectorLayer = mapInstance.getLayer("vectorLayer");
			brOne.setVisible(false);
			brTwo.setVisible(true);
			$(this).addClass('active').siblings().removeClass('active');
			renderMap();
			//判断resource是否已经加载过，如果已经加载过从缓存中读取
			if (ButtonEvent['brOneResource']) {
				vectorLayer.setSource(ButtonEvent['brTwoResource']);
				return false;
			}
			loadWFS({
				typeName: 'brworld:br1'
			}, function(data) {
				ButtonEvent['brTwoResource'] = getVectorSource(data.features || []);
				vectorLayer.setSource(ButtonEvent['brTwoResource']);
			});
		},
		//实时按钮
		"current": function() {
			debugger;
			Play.getInstance().setDefault();
			renderMap();
		},
		//显示散点图
		"pointMap": function() {
			HeatMap.getInstance().hide();
			Map.getInstance().getLayer('pointLayer').setVisible(true);
		},
		//显示热图
		"heatMap": function() {
			HeatMap.getInstance().refresh(getSearchData());
			Map.getInstance().getLayer('pointLayer').setVisible(false);
		},
		//面板开关按钮
		"toggleBtn": function() {
			var _this = $(this);
			if (_this.hasClass('active')) {
				$(this).removeClass('active');
				$('.sidle-top').removeClass('active')
			} else {
				$(this).addClass('active');
				$('.sidle-top').addClass('active')
			}
		}
	}
	/**
	 * @description 加载比如标注图层
	 */
function loadWFS(param, callBack) {
	var baseOption = {
		'service': 'WFS',
		'version': '1.0.0',
		'request': 'GetFeature',
		'maxFeatures': '50',
		'outputFormat': 'application/json'
	}
	baseOption = $.extend(baseOption, param);
	$.ajax({
		url: baseServer + '/brworld/ows',
		type: 'GET',
		dataType: 'JSON',
		data: baseOption,
		success: function(data) {
			callBack(data);
		},
		error: function(err) {
			var state = err.readyState;
		}
	});
}
/**
 * @description 地图类
 */
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
			if (map) {
				return map;
			}
			return;
		}
		/**
		 * @description 获取地图图层
		 * @param {Object} layerName
		 */
	var getLayer = function(layerName) {
			if (map.layers[layerName]) {
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
				heatMapObj = h337.create(config);
			}
			/**@description 填充热图展示数据
			 * @param {Object} data
			 */
		var setData = function(data) {
				var pxy, px, py, multiple, points = [],
					//radius = config.heatMap.radius,
					radius = _defaultOption.radius,
					radiu = radius[_defaultOption.map.getView().getZoom() - 18];
				for (var xy in data) {
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
				$.ajax({
					url: Base.qmServer + 'heatmap/queryHeatMap',
					type: 'POST',
					dataType: 'JSON',
					data: param,
					success: function(response) {
						show();
						if (response.code == 0) {
							renderDate(response.result.timestamp);
							//fulshUpdateTime(response.result.timestamp);
							setData(response.result.lonlat);
						}
					},
					error: function(err) {
						show();
						//layer.msg('网络中断,请检查网络设置');
					}
				});
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
				if (!option.map) {
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
	/**
	 * @description 热图麻点图播放功能
	 */
var Play = function() {
	var index = 0,
		curTime, timeStampList = [],
		intervalTime = 900, //播放间隔
		interval, sildeMoveSize, sidlerMaxY = 283,
		sidlerMinY = 5,
		isAuto = false, //是否自动播放
		isDrag = true; //是否允许拖动
	var _callBack; //播放回调
	/**
	 * @description 设定播放日期
	 * @param {Object} time
	 */
	var setTime = function(time) {
			setDefault();
			timeStampList = [];
			loadTimestamps(time);
		}
		/**
		 * @description 播放组件恢复到初始状态 
		 */
	var setDefault = function() {
			//timeStampList = [];
			index = 0;
			updateSideLoc();
			stop();
		}
		/**
		 * @description 播放
		 */
	var play = function() {
			//disabledMap();
			$("#playBtn").addClass('stop');
			//禁止拖动
			isDrag = false;
			interval = setInterval(function() {
				if (index > timeStampList.length - 1) {
					if (isAuto) {
						index = 0;
					} else {
						stop();
						index = 0;
						return false;
					}
				}
				renderMap(index);
				index++;
			}, intervalTime);
		}
		/**
		 * @description 停止播放
		 */
	var stop = function() {
			clearInterval(interval);
			//abledMap();
			$("#playBtn").removeClass('stop');
			isDrag = true;
		}
		/**
		 * @description 播放上一个
		 */
	var prev = function() {
			//自动播放的过程中禁用上下级播放
			if (!isDrag) {
				return false;
			}
			index--;
			if (index < 0) {
				if (isAuto) {
					index = timeStampList.length - 1;
				} else {
					alert('已经是第一个了');
					index = 0;
					return false;
				}
			}
			renderMap(index);
		}
		/**
		 * @description播放下一个
		 */
	var next = function() {
			//自动播放的过程中禁用上下级播放
			if (!isDrag) {
				return false;
			}
			index++;
			if (index > timeStampList.length - 1) {
				if (isAuto) {
					index = 0;
				} else {
					alert('已经是最后一个了');
					index = timeStampList.length - 1;
					return false;
				}
			}
			renderMap(index);
		}
		/**
		 * @description 查询指定时间时间戳文件名列表
		 * @param {Object} time 格式:yyyyMMdd
		 */
	var loadTimestamps = function(time) {
			$.ajax({
				url: Base.qmServer + '/heatmap/queryTimestamp',
				type: 'POST',
				dataType: 'JSON',
				data: {
					startDate: time,
					endDate: time,
				},
				success: function(response) {
					if (response.code == 0) {
						timeStampList = response.result;
						//计算播放一个文件滑块的位移量
						sildeMoveSize = (sidlerMaxY - sidlerMinY) / timeStampList.length;
					} else {
						alert(response.result);
						if (response.code == 99) {
							setTimeout(function() {
								top.location.href = '/beyoulife/login.html';
							});
						}
					}
				},
				error: function(err) {
					var state = err.readyState;
				}
			});
		}
		/**
		 * @description 地图播放的过程中禁用地图操作
		 */
	var disabledMap = function() {
			var div = document.createElement("div");
			div.style.cssText = "position:fixed;z-index:700;top:0;left:0;";
			div.style.width = $(window).width() + 'px';
			div.style.height = $(window).height() + 'px';
			div.className = "play-mask";
			$("body").append(div);
		}
		/**
		 * @description 重新激活地图操作
		 */
	var abledMap = function() {
			$('.play-mask').remove();
		}
		/**
		 * @description 播放时更新滑块位置
		 */
	var updateSideLoc = function() {
			$('#time_silder').css('left', (sidlerMinY + index * sildeMoveSize) + 'px');
		}
		/**
		 * @description 渲染地图数据
		 * @param {Object} index  时间戳文件索引
		 */
	var renderMap = function(index) {
			//时间戳文件列表为空时停止播放
			if (timeStampList.length == 0) {
				alert('数据文件为空');
				stop();
				return false;
			}
			updateSideLoc();
			//播放回调函数
			_callBack && _callBack(timeStampList[index]);
		}
		/**
		 * @description 滑块拖动
		 */
	var initDrag = function() {
			var timeSlider = $("#time_silder")[0];
			Drag.init(timeSlider, timeSlider, null);
			//滑块垂直移动
			timeSlider.onDrag = function(clientY, clientX, self) {
				if (!isDrag) {
					return false;
				}
				clientY = clientY < sidlerMaxY ? clientY : sidlerMaxY;
				clientY = clientY < sidlerMinY ? sidlerMinY : clientY;
				timeSlider.style.top = 0 + 'px';
				timeSlider.style.left = clientY + 'px';
			};
			//拖拽结束后根据拖拽的距离计算时间戳列表 索引
			timeSlider.onDragEnd = function() {
				if (!isDrag) {
					return false;
				}
				if (!emptyDataInfo()) {
					timeSlider.style.left = sidlerMinY + 'px';
					return false;
				}
				var left = timeSlider.offsetLeft;
				index = Math.floor((left - sidlerMinY) / sildeMoveSize);
				//console.log(index + ',' + top);
				renderMap(index);
			}
		}
		/**
		 * @description 无数据提示信息 
		 */
	var emptyDataInfo = function() {
		if (timeStampList.length == 0) {
			alert('当日无数据文件');
			return false;
		}
		return true;
	};
	/**
	 * @description绑定事件
	 */
	var bindEvent = function() {
		//播放按钮
		$(".process-con .play").click(function() {
			var _this = $(this);
			if (_this.hasClass('stop')) {
				stop();
				/*_this.removeClass('stop');*/
			} else {
				if (!emptyDataInfo()) {
					return false;
				}
				_this.addClass('stop');
				play();
			}
		});
		$("#prevPlay").click(function() {
			if (!emptyDataInfo()) {
				return false;
			}
			prev();
		});
		$("#nextPlay").click(function() {
			if (!emptyDataInfo()) {
				return false;
			}
			next();
		});
		$("#roundPlay").click(function() {
			var _this = $(this);
			if (_this.attr('checked')) {
				_this.removeAttr('checked');
				isAuto = false;
			} else {
				isAuto = true;
				_this.attr('checked', 'checked');
			}
		})
	}
	var init = function(callBack) {
		_callBack = callBack;
		bindEvent();
		$("#time_silder").css('left', sidlerMinY + 'px');
		var now = new Date();
		$("input[name=datepicker]").val(now.Format('yyyy-MM-dd'));
		loadTimestamps(now.Format('yyyyMMdd'));
		initDrag();
	}
	return {
		setTime: setTime,
		setDefault: setDefault,
		init: init
	}
}

function formatWFSData(dataList) {
	if (!dataList || dataList.length == 0) {
		return false;
	}
	var array = [],
		obj;
	for (var i = 0, len = dataList.length; i < len; i++) {
		obj = dataList[i];
		obj.properties.id = obj.id;
		obj.properties.img = getIConByStyle(obj.properties.STYLE);
		if (obj.properties.NAME == '比如世界') {
			obj.properties.img = '';
		}
		array.push(obj.properties);
	}
	return array;
}

function getIConByStyle(style) {
	if ([2, 3, 4, 5, 6, 10].indexOf(style) != -1) {
		return "img/sp.png";
	}
	if ([7].indexOf(style) != -1) {
		return "img/dt.png";
	}
	if ([9].indexOf(style) != -1) {
		return "img/wsj.png";
	}
}

/**
 * @description 获取散点图图层数据源
 */
function getPointSource(pointList) {
	var markList = [],
		array = [],
		obj;
	//console.log(pointList.length);
	for (var i = 0, len = pointList.length; i < len; i++) {
		obj = pointList[i].split(',');
		obj = [obj[0] * 1, obj[1] * 1];
		//obj = pointList[i];
		var markFeature = new ol.Feature({
			//84转墨卡托
			geometry: new ol.geom.Point(ol.proj.transform(obj, 'EPSG:4326', 'EPSG:3857'))
		});
		//	markFeature.setStyle(markStyle);
		markList.push(markFeature);
	}
	var vectorSource = new ol.source.Vector({
		features: markList
	});
	return vectorSource;
}

/**
 * @description 获取标准图层数据源
 */
function getVectorSource(list) {
	var list = formatWFSData(list);
	//标注图片样式
	var imgStyle = {
			anchor: [0.5, 46],
			anchorXUnits: 'fraction',
			anchorYUnits: 'pixels',
			size: [30, 30],
			src: 'img/wifi.png'
		}
		//标注文字样式
	var textStyle = {
		text: "",
		font: '12px 微软雅黑',
		fill: new ol.style.Fill({
			color: "#FFF"
		})
	}
	if (list && list.length == 0) {
		return false;
	}
	var obj, markList = [];
	for (var i = 0, len = list.length; i < len; i++) {
		obj = list[i];
		if (!obj.NAME) {
			continue;
		}
		var markStyle = new ol.style.Style({
			image: new ol.style.Icon((
				$.extend(imgStyle, {
					src: obj.img
				})
			)),
			text: new ol.style.Text($.extend(textStyle, {
				text: obj.NAME
			}))
		});
		var markFeature = new ol.Feature({
			//84转墨卡托
			geometry: new ol.geom.Point(ol.proj.transform([obj.LAN, obj.LAT], 'EPSG:4326', 'EPSG:3857'))
		});
		markFeature.setStyle(markStyle);
		markList.push(markFeature);
	}
	var vectorSource = new ol.source.Vector({
		features: markList
	});
	return vectorSource;
}

/**
 * 获取查询表单内容
 */
function getSearchData() {
	return {
		floor: 'F' + ($('.layerControl span.active').index() + 1),
		typeName: $('#mapType').val(),
		type: (function() {
			var param = {
				"pointMap": 1,
				"heatMap": 2
			}
		})()
	}
}
/**
 * @description 显示数据刷新时间
 * @param {Object} timestamp  格式:yyyyMMdd
 */
function renderDate(timestamp) {
	var year = timestamp.substr(0, 4),
		month = timestamp.substr(4, 2),
		day = timestamp.substr(6, 2),
		hour = timestamp.substr(8, 2),
		min = timestamp.substr(10, 2);
	$('.refresh').text('时间：' + year + '-' + month + '-' + day + ' ' + hour + ':' + min);
}
/**
 *@description 加载散点图数据 
 * @param {Object} param 查询参数
 * @param {Object} callBack 回调函数可选
 */
function loadData(param, callBack) {
	$.ajax({
		url: Base.qmServer + 'heatmap/queryHeatMap',
		type: 'POST',
		dataType: 'JSON',
		data: param,
		success: function(data) {
			if (data.code == 0) {
				if (callBack) {
					callBack(data);
					return false
				}
				renderDate(data.result.timestamp);
				var source = getPointSource(data.result.lonlat || []),
					pointLayer = Map.getInstance().getLayer("pointLayer");
				pointLayer.setSource(source);
				pointLayer.setVisible(true);
			} else {
				alert(data.result);
				if (data.code == 100) {
					top.location.href = "/beyoulife/login.html";
				}
			}
		},
		error: function(err) {
			layer.msg('网络中断,请检查网络设置');
		}
	});
}
/**
 * @description 日期变更事件 
 */
function timeChange(obj) {
	var nDate = obj.cal.newdate;
	var year = nDate['y'],
		month = nDate['M'],
		day = nDate['d'];
	month = month < 10 ? '0' + month : month;
	day = day < 10 ? '0' + day : day;
	Play.getInstance().setTime(year + month + day);
}
/**
 * @description 渲染当前选中的地图
 */
function renderMap(timeStamp) {
	var param = getSearchData(),
		renderMap = {
			"pointMap": function() {
				loadData(param);
			},
			"heatMap": function() {
				HeatMap.getInstance().refresh(param);
			}
		};
	timeStamp && (param.timestamp = timeStamp);
	renderMap[param.typeName].apply(this);
}
$.each([Map, HeatMap, Play], function() {
	$.extend(this, {
		getInstance: function() {
			if (!this.instance) {
				this.instance = new this();
			}
			return this.instance;
		}
	});
});
//onload
$(function() {
	//绑定按钮事件
	$.each([$("#brOne"), $("#brTwo"), $("#current"), $("#toggleBtn")], function() {
		var _self = $(this);
		_self.click(ButtonEvent[_self.data('fun')]);
		//ButtonEvent[_self.data('fun')].apply(_self, arguments);
	});
	//切换地图类型
	$("#mapType").easyDropDown({
		onChange: function(selected) {
			ButtonEvent[selected.value].apply(this, arguments);
		}
	})
	var mapInstance = Map.getInstance();
	//地图初始化
	mapInstance.init({
		target: "map", //地图容器对象
		roate: 49.5, //地图偏转角度
		zoom: 19, //默认层级
		maxZoom: 21,
		minZoom: 18,
		center: [116.461622, 39.968221] //中心点
	});
	var mapObj = mapInstance.getMap(),
		mapView = mapObj.getView();
	//地图移动结束事件
	mapObj.on('moveend', function() {
		if ($("#mapType").val() == 'heatMap') {
			/*var center = map.getView().getCenter();
			curCenter = map.getPixelFromCoordinate(center);*/
			HeatMap.getInstance().refresh(getSearchData());
		}
	});
	var oldCenter = [0, 0];
	//地图移动事件
	mapView.on('change:center', function(evt) {
		var b=mapView.calculateExtent(mapObj.getSize());
		var curCenter = ol.extent.getCenter(mapView.calculateExtent(mapObj.getSize()));
		curCenter = mapObj.getPixelFromCoordinate(curCenter);
			console.log((curCenter[0]-oldCenter[0])+','+(curCenter[1]-oldCenter[1]));
			oldCenter=curCenter;
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
	//播放组件初始化
	Play.getInstance().init(function(timeStamp) {
		//播放回调，会在改变帧数后执行
		renderMap(timeStamp);
	});
	//默认加载散点图
	renderMap();
});