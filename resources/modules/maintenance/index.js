require(["jquery", "layer", "Ajax", 'modules/common/tableOption', "libs/bootstrap/bootstrap-datepicker/bootstrap-datetimepicker"], function($, layer, Ajax, BtrTable, DatePicker) {
	var btrTable,
		inputDom = $("#datetimepicker"),
		cardid = '14737-31141-23456',
		startDate = new Date('2016-10-01 00:00:00'),
		endDate = new Date('2017-02-28 23:59:59'),
		defaultDate = (function() {
			var now = new Date();
			if(now.getTime() > endDate.getTime()) {
				return endDate;
			}
			if(now.getTime() < startDate.getTime()) {
				return startDate;
			}
			return now;
		})();
	/**
	 * @desc 初始化日期组件
	 */
	var initDatePicker = function() {
		//语言扩展
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
		inputDom.datetimepicker({
			format: 'yyyy-mm-dd',
			container: '.js-date-picker',
			language: 'zh-CN',
			minView: '2',
			maxView: '3',
			startDate: startDate,
			endDate: endDate,
			autoclose: false,
			todayHighlight: true
		}).on('changeDate', function(event) {
			dateChangeProxy(event.date);
		}).datetimepicker("show").datetimepicker("update", defaultDate.Format('yyyy-MM-dd'));
		$(document).on('click', function() {
			inputDom.datetimepicker('show');
		});
	};
	/**
	 * @desc 加载预约信息
	 * @param {Object} date 时间
	 * @param {Object} callBack 回调函数
	 */
	var loadYYInfo = function(date, callBack) {
			Ajax.ajax(Base.domainName + 'beyoulife-wx/carWash/queryYyTimeByYyDate', {
				yyDate: date
			}, function(rep) {
				callBack && callBack(rep);
			});
		}
		/**
		 * @desc 显示预约信息
		 */
	var renderYYDate = function(data) {
			data = data.result;
			var dataArray = [];
			for(var key in data) {
				data[key] ? dataArray.push(data[key]) : dataArray.push({
					yyTime: key
				});
			}
			btrTable.setData(dataArray);
		}
		/**
		 * @desc 获取总览信息
		 */
	var loadTotalInfo = function() {
		Ajax.ajax(Base.domainName + 'beyoulife-wx/carWash/statisNumCarWashInfo', {}, function(rep) {
			var data = rep.result;
			$('.js-total').text(data.zsds); //总时段数
			$('.js-wyy').text(data.wyy); //未预约
			$('.js-yyy').text(data.yyy); //已预约
			$('.js-yhx').text(data.yhx); //已核销
		});
	}
	var dateChangeProxy = function(time) {
		time = time.Format('yyyy-MM-dd');
		$('.js-date').text(time);
		loadYYInfo(time, renderYYDate);
	}
	var initBtrTable = function() {
		btrTable = new BtrTable({
			dom: $("#btrTable"),
			sidePagination: 'client',
			showToggle: false,
			showExport: false,
			striped: false,
			showColumns: false,
			pagination: false,
			columns: [{
				field: 'yyTime',
				title: '时段',
				align: 'center'
			}, {
				field: 'status',
				title: '状态',
				align: 'center',
				width: '100px',
				formatter: function(value, row, index) {
					if(row.status == 2) {
						return "已核销"
					}
					return value ? "已预约" : "未预约";
				}
			}, {
				field: 'phone',
				title: '预约会员手机',
				align: 'center'
			}, {
				field: 'carNo',
				title: '预约车辆',
				align: 'center'
			}, {
				title: '操作',
				align: 'center',
				width: '200px',
				formatter: function(value, row, index) {
					return row.status ? '<a data-hour="' + row.yyTime + '" data-openid="' + row.openid + '" data-cardid="' + row.cardid + '" href="javascript:;" class="' + (row.status != 2 ? 'quit-yy' : 'add-disable') + '">取消预约</a>' : '<a data-hour="' + row.yyTime + '" data-openid="' + row.openid + '" data-cardid="' + row.cardid + '" href="javascript:;" class="' + (new Date(inputDom.val() + ' 23:59:59').getTime() - new Date().getTime() > 0 ? 'add-yy' : 'add-disable') + '">新建预约</a>';
				}
			}]
		});
		//新增预约信息
		$("#btrTable").on('click', '.add-yy', function() {
			var $this = $(this),
				openid = $this.data("openid"),
				date = inputDom.val(),
				hour = $this.data('hour');
			hour = encodeURIComponent(hour);
			layer.open({
				type: 2,
				title: '新建预约',
				shadeClose: true,
				shade: 0.8,
				area: ['600px', '430px'],
				content: 'add.html?hours=' + hour + '&date=' + date //iframe的url
			});
		});
		//取消预约信息
		$("#btrTable").on('click', '.quit-yy', function() {
			var $this = $(this),
				openid = $this.data("openid");
			//cardid = $this.data("cardid");
			layer.confirm('确认要取消该会员的预约吗？该会员已获得的车辆保养兑换券将被收回。', {
					btn: ['确定', '取消']
				}, function() {
					//取消预约
					Ajax.ajax(Base.domainName + 'beyoulife-wx/carWash/cancleYyByOpenid', {
						openid: openid,
						cardid: cardid
					}, function(rep) {
						//刷新数据表格
						dateChangeProxy(new Date(inputDom.val()));
						//刷新预约详情新
						loadTotalInfo();
					});
					layer.closeAll();
				},
				function() {
					layer.closeAll();
				});
		});
	}
	var init = function() {
		initDatePicker();
		initBtrTable();
		dateChangeProxy(defaultDate);
		loadTotalInfo();
	}
	init();
});