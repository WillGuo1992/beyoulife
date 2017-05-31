define({
	title: {
		text: '',
		//subtext: '纯属虚构',
		x: 'center'
	},
	backgroundColor:"#FFF",
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
	tooltip: {
		trigger: 'axis'
	},
	toolbox: {
		show: false
	},
	legend: {
		'y': 'bottom',
		data: []
	},
	xAxis: [{
		type: 'category',
		axisLabel: {
			/*rotate: 50,*/
			margin: 10
		},
		data: []
	}],
	yAxis: {
		type: 'value',
		name: '',
		axisLabel: {
			formatter: '{value}'
		}
	},
	series: []
})