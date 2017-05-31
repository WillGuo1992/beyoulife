/**
 * 作者:金海宾
 * 时间:2016/9/2
 */
define(["$", "layer"], function ($, layer) {
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
    var setPosition = function (top, left) {
        dom.style.top = top + "px";
        dom.style.left = left + "px";
    }
    /**
     * @description 初始化热图控件
     */
    var initHeatMap = function () {
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
    var setData = function (data) {
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
    var hide = function () {
        dom.style.display = 'none';
    }
    /**
     * @description 更新热图位置
     */
    var resize = function () {
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
    var show = function () {
        dom.style.display = 'block';
    }
    /**
     * @description ajax加载加载热图数据
     */
    var refresh = function (param) {
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
            success: function (response) {
                show();
                if (response.code == 0) {
                    renderDate(response.result.timestamp);
                    //fulshUpdateTime(response.result.timestamp);
                    setData(response.result.lonlat);
                }
            },
            error: function (err) {
                show();
                //layer.msg('网络中断,请检查网络设置');
            }
        });
    }
    /**
     * @description 获取地图尺寸
     */
    var getMapSize = function () {
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
    var init = function (option) {
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
});
