require(["jquery", "jquery.pagination", "Ajax", "util", "Vue"], function($, Pagination, Ajax, Util, Vue) {
	var card_no = Util.Request("card_no"),
		vModel = new Vue({
			el: "#app",
			data: {
				param: {
					cardNo: card_no, //卡号
					pageSize: 6, //每页记录条数
					pageNum: 1 //页码
				},
				list: []
			}
		});
	/**
	 * @desc 请求积分记录
	 * @param {Object} param 查询参数 {cardNo:'',pageSize:'',pageNum:''}
	 */
	var loadDetail = function(param) {
		Ajax.request('member/queryIntegralHistory', param, function(rep) {
			vModel.$set('list', rep.result);
			initPagination(rep.total);
		});
	};
	/**
	 * @desc 加载分页控件
	 * @param {Object} count 总记录条数
	 */
	var initPagination = function(count) {
			//总记录条数小于单页记录条数隐藏分页控件
			if(count <= vModel.param.pageSize) {
				$("#pagination").hide();
				return false;
			}
			$("#pagination").show();
			//分页插件
			$("#pagination").data('pagination') || $("#pagination").pagination(count, {
				num_edge_entries: 2,
				num_display_entries: 3,
				callback: function(number) {
					vModel.$set("param.pageNum", number + 1);
				},
				items_per_page: vModel.$data.param.pageSize,
				prev_text: "上一页",
				next_text: "下一页"
			}).data('pagination', true);
		}
		//监听请求参数变化
	vModel.$watch("param", function(newVal, oldVal) {
		loadDetail(newVal);
	}, {
		deep: true, //检测对象
		immediate: true //已表达式的当前值触发回调(默认加载第一页数据)
	});
});