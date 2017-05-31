define({
	title: {
		text: '',
		//subtext: '纯属虚构',
		x: 'center'
	},
	color: [
		'#4f86c5',
		'#e95098',
		'#a9d06b',
		'#f6ad3a',
		'#a588bd',
		'#00ac97',
		'#54cb40',
		'#ff6464',
		'#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
		'#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
		'#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
	],
	backgroundColor: "#FFF",
	tooltip: {
		trigger: 'item',
		//formatter: "{a} <br/>{b} : {c}元 ({d}%)"
		/*	formatter: function(param) {
				var name = param.name,
					value = param.value,
					percent = param.percent,
					str = '';
				if (value < 10000) {
					str = name + '<br/>' + value + '个  ：' + percent + '%';
				} else {
					str = name + '<br/>' + (value / 10000).toFixed(2) + '万个  ：' + percent + '%';
				}
				return str;
			}*/
	},
	legend: {
		orient: 'vertical',
		left: 'left',
		data: []
	},
	series: [{
		name: '公众号关注数据统计',
		type: 'pie',
		radius: '55%',
		center: ['50%', '60%'],
		data: [],
		itemStyle: {
			emphasis: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			}
		}
	}]
});