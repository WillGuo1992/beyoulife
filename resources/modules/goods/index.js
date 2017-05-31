require(['jquery', 'layer', 'Vue', 'modules/common/upload', 'modules/common/tableOption', 'jquery.validate', "modules/common/area", "EasyDropdown", "Ajax"], function($, layer, Vue, Uploader, BtrTable, Validate, Area, EasyDropdown, Ajax) {
	//步骤面板对象
	var Panel = function() {
			//显示的面板索引
			var index = 0;
			var showPanel = function(count) {
				index = count;
				$('.js-breadcrumb-content').eq(index).show().siblings().hide();
				$('.js-breadcrumb li').eq(index).addClass('active').siblings().removeClass('active');
			}
			var next = function() {
				//下一步 时 执行 效验
				var Check = {
					"0": FirstPanel.getInstance().check,
					"1": SecondPanel.getInstance().check,
					"2": ThirdPanel.getInstance().check
				}
				if(typeof Check[index] == 'function' && !Check[index]()) {
					return false;
				}

				if(index == 2) {
					//提交商品信息
					var _this = this,
						submitData = $.extend(FirstPanel.getInstance().getData(), SecondPanel.getInstance().getData(), ThirdPanel.getInstance().getData())
					Ajax.request("goods/saveGoodsInfo", submitData, function(rep) {
						_this.next();
					});
				}
				index++;
				showPanel(index);
			}
			var prev = function() {
					index--;
					showPanel(index);
				}
				/**
				 * @desc 提交商品信息
				 */
			var success = function() {
				var submitData = $.extend(FirstPanel.getInstance().getData(), SecondPanel.getInstance().getData(), ThirdPanel.getInstance().getData());
			}
			var bindEvent = function() {
				$('.js-prev').click(prev);
				$('.js-next').click(next);
				$(".js-success").click(success);
				//单选按钮组
				$(".radio_label").click(function(e) {
					if($(this).hasClass("check")) {
						return false;
					}
					var parent = $(this).closest(".radio_label_group");
					parent.find(".radio_label").removeClass("check").find("input[type=text]").val('');
					//IE为冒泡事件流，所以手动触发radio的click事件
					$(this).addClass("check").find("input[type=radio]").click();
					//Firfox chrome 支持捕获事件流 为了避免重复触发radio 的click事件 禁用事件流传播
					e.stopPropagation();
					// return false;
				}).find("input[type=radio]").click(function(e) {
					//停止事件冒泡
					e.stopPropagation();
				});
				//复选框按钮组
				$(".checkbox_label").click(function() {
					$(this).hasClass("check") ? $(this).removeClass("check").find("input[type=text]").attr("disabled", "disabled").val('') : $(this).addClass("check").find("input[type=text]").removeAttr("disabled", "disabled");
					//  return false;
				}).find("input").click(function(e) {
					//停止事件冒泡
					e.stopPropagation();
				});
			}
			var init = function() {
				bindEvent();
			}
			return {
				init: init,
				showPanel: showPanel
			}
		}
		/**
		 * @return {{init: init, check: check}}
		 * @constructor
		 */
	var FirstPanel = function() {
			//初始化第一页的数据模型
			var goodsInfoModel = new Vue({
				el: "#goodsInfo",
				data: {
					singleCategory: "",
					goods: {
						details: [],
						category: [],
						logo_urls: [],
						logo: ""
					}
				},
				methods: {
					delCoverPic: function() {
						this.goods.logo = "";
					},
					delOtherPic: function(index) {
						this.goods.logo_urls.splice(index, 1);
					},
					//上移
					infoUp: function(index) {
						var details = $.extend(true, [], this.goods.details),
							obj;
						obj = details[index];
						details[index] = details[index - 1];
						details[index - 1] = obj;
						this.goods.details = details;
					},
					//下移
					infoDown: function(index) {
						var details = $.extend(true, [], this.goods.details),
							obj;
						obj = details[index];
						details[index] = details[index + 1];
						details[index + 1] = obj;
						this.goods.details = details;
					},
					//编辑
					infoEdit: function(index, type) {
						var that = this;
						var funs = {
							'2': function(index, type) {
								//$('#addInfoPic').data('index', index+1).click();
							},
							'1': function(index, type) {
								//编辑
								$('#editArea').find("textarea").data('index', index + 1).val(this.goods.details[index].value);
								countFreeWord();
								layer.open({
									type: 1,
									area: ['500px', '310px'],
									content: $('#editArea')
								});
							}
						}
						funs[type].apply(this, arguments);
					},
					//删除
					infoDel: function(index) {
						this.goods.details.splice(index, 1);
					},
					//添加文本内容
					addTxt: function() {
						layer.open({
							type: 1,
							area: ['500px', '310px'],
							content: $('#editArea')
						});
					},
					//添加商品类目
					addCategory: function() {
						var value = $.trim(this.singleCategory);
						if(!value) {
							layer.msg("请输入商品类目");
							return false;
						}
						if(this.goods.category.indexOf(value) != -1) {
							layer.msg("商品类目已存在");
							return false;
						}
						if(this.goods.category.length >= 3) {
							layer.msg("商品类目最多只能添加3个");
							return false;
						}
						this.goods.category.push(value);
						this.singleCategory = "";
					},
					//删除商品类目
					delCategory: function(index) {
						this.goods.category.splice(index, 1);
					}
				}
			});
			/**
			 * @desc 绑定文件上传
			 */
			var bindUploader = function() {
					//上传封面
					var uploadCover = new Uploader({
						server: Base.qmServer + "sys/uploadImg",
						fileVal: 'img',
						pick: "#goodsLogo",
						accept: {
							title: 'Images',
							extensions: 'png,jpg',
							mimeTypes: 'images/png,images/jpeg'
						},
						uploadSuccess: function(file) {
							//   var imgUrl = "../../resources/images/a.jpg";
							goodsInfoModel.goods.logo = Base.imgUrl + file[1].result[0];
						}
					});
					//上传其他图片
					var uploadGoodOther = new Uploader({
						server: Base.qmServer + "sys/uploadImg",
						fileVal: 'img',
						pick: "#goodsOtherPic",
						accept: {
							title: 'Images',
							extensions: 'png,jpg',
							mimeTypes: 'images/png,images/jpeg'
						},
						uploadSuccess: function(file) {
							var imgUrl = Base.imgUrl + file[1].result[0];
							goodsInfoModel.goods.logo_urls.push(imgUrl);
						}
					});
					//详情图片上传
					var uploadGoodOther = new Uploader({
						server: Base.qmServer + "sys/uploadImg",
						fileVal: 'img',
						pick: "#addInfoPic",
						accept: {
							title: 'Images',
							extensions: 'png,jpg',
							mimeTypes: 'images/png,images/jpeg'
						},
						uploadSuccess: function(file) {
							var imgUrl = Base.imgUrl + file[1].result[0];
							goodsInfoModel.goods.details.push({
								type: '2',
								value: imgUrl
							})

						}
					});
				}
				/**
				 * @desc 计算文本框剩余字数
				 */
			var countFreeWord = function() {
					var editAreaWarp = $('.edit_area'),
						textArea = editAreaWarp.find('textarea'),
						val = textArea.val();
					val = $.trim(val);
					var freeCount = 500 - val.length
					if(freeCount <= 0) {
						freeCount = 0;
						textArea.val(val.substring(0, 500));
					}
					$('.textarea_tips span').text(freeCount);
				}
				/**
				 * @desc 添加文本框事件
				 */
			var initTextAreaEvent = function() {
					var editAreaWarp = $('.edit_area'),
						textArea = editAreaWarp.find('textarea');
					/**
					 * @desc 清空
					 */
					var clear = function() {
						textArea.val('').data('index', '');
						layer.closeAll();
						$('.textarea_tips span').text(500);
					}
					editAreaWarp.find('.js-submit').click(function() {
						var index = textArea.data('index');
						//判断是编辑还是新增
						if(index) {
							//var infos = $.extend(true, [], goodsInfoModel.infos);
							content: textArea.val()
							goodsInfoModel.goods.details[index * 1 - 1].value = $.trim(textArea.val());
						}
						else {
							goodsInfoModel.goods.details.push({
								type: '1',
								value: textArea.val()
							})
						}
						clear();
					});
					editAreaWarp.find('.js-exit').click(function() {
						clear();
					});
					textArea.bind('input propertychange', countFreeWord);
				}
				/**
				 * @desc 表单效验
				 */
			var check = function() {
				if(!$.trim(goodsInfoModel.goods.brand_name)) {
					layer.msg("请输入商品名称");
					return false;
				}

				if(goodsInfoModel.goods.category.length == 0) {
					layer.msg("请输入商品类目");
					return false;
				}
				if(!goodsInfoModel.goods.logo) {
					layer.msg("请上传商品主图");
					return false;
				}
				if(!goodsInfoModel.goods.logo_urls || goodsInfoModel.goods.logo_urls.length == 0) {
					layer.msg("请上传商品其他图片");
					return false;
				}
				return true;
			};
			/**
			 * @desc 获取数据
			 */
			var getData = function() {
				var data = $.extend(true, {}, goodsInfoModel.goods);
				//序列化类目，详情信息，其他图片
				data.category = JSON.stringify(data.category);
				data.details = JSON.stringify(data.details);
				data.logo_urls = JSON.stringify(data.logo_urls);
				return data;
			};
			/**
			 * @desc 初始化
			 */
			var init = function() {
				bindUploader();
				initTextAreaEvent();
			}
			return {
				init: init,
				check: check,
				getData: getData
			}
		}
		/**
		 * @desc 第二页
		 */
	var SecondPanel = function() {
		var standardBtr, priceBtr, vModel;
		//表格通用 配置项
		var defaultTableOption = {
			sidePagination: 'client',
			showToggle: false,
			showExport: false,
			striped: false,
			showColumns: false,
			pagination: false
		};
		//规格值 Dialog对象
		var StandardDialog = {
			inputCount: 1, //规格文本框数量
			dom: $('.standard_Dialog'),
			//绑定事件
			bindEvent: function() {
				var _this = this;
				$(document).on('click', '.js-newStandardInput', function() {
					if(_this.inputCount >= 30) {
						layer.msg("规格最多30个");
						return false;
					}
					var str = "<tr class='new_standard_input'><td></td><td><input type=\"text\" name=\"standardval\" class=\"form-control\" placeholder=\"规格值\"><a class=\"ml10 js-delStandardInput\" href=\"javasicrpt:;\">删除</a></td></tr>";
					$(this).closest("tr").before(str);
					_this.inputCount++;
				});
				//删除规格值文本框
				$(document).on('click', '.js-delStandardInput', function() {
					$(this).closest("tr").remove();
					_this.inputCount--;
				});
				//失去焦点时效验是否有重复值
				$(document).on("blur", 'input[name=standardval]', function() {
					if(!_this.checkStanderdExist($.trim(this.value))) {
						layer.msg('规格已存在,请重新录入');
						//$(this).focus();
					}
				});
				//提交数据
				$(document).on('click', '.js-standardForm-submit', function() {
					var form = _this.dom.find("form"),
						standardDom = form.find('input[name=standard]'),
						standardVal = $.trim(standardDom.val()),
						standardValDoms = form.find('input[name=standardval]'),
						standardVals = [],
						sVal;
					//表单验证，效验 规格名，规格值是否为空是否为空，规格值是否存在重复的
					if(!standardVal) {
						layer.msg('规格名不能为空');
						return false;
					}
					if(vModel.standards[standardVal]) {
						layer.msg("规格名已存在");
						return false;
					}
					for(var i = 0, len = standardValDoms.length; i < len; i++) {
						sVal = $.trim(standardValDoms[i].value);
						if(!sVal) {
							layer.msg('请输入规格值');
							$(standardValDoms[i]).focus();
							return false;
						}
						if(!_this.checkStanderdExist(sVal)) {
							layer.msg('存在重复的规格值,请重新录入');
							return false;
						}
						standardVals.push(sVal);
					}
					var obj = {
						standard: standardVal,
						list: standardVals
					};
					typeof _this['onSave'] == 'function' && _this['onSave'](obj);
					/*var obj = $.extend(true, {}, vModel.standards);
					 obj[standardVal] = standardVals;
					 vModel.standards = obj;*/
					_this.standerdClear();
					//关闭dialog
					layer.closeAll();
				});
			},
			//效验规格值是否有重复的
			checkStanderdExist: function(val) {
				var standard = this.dom.find("input[name=standardval]"),
					count = 0;
				for(var i = 0, len = standard.length; i < len; i++) {
					if($.trim(standard[i].value) == val) {
						count++;
					}
				}
				if(count <= 1) {
					return true;
				}
				return false;
			},
			//重置弹窗对象
			standerdClear: function() {
				var form = this.dom.find('form');
				form.find('.new_standard_input').remove();
				form.find('input').val('');
			},
			// data {standard:"",list:[]}
			initDom: function(data) {
				var str = '';
				if(!data) {
					return false;
				}
				this.dom.find('input[name=standard]').val(data.standard);
				if(data.list instanceof Array) {
					this.dom.find('input[name=standardval]').val(data.list[0]);
					for(var i = 1, obj; obj = data.list[i++];) {
						str += "<tr class='new_standard_input'><td></td><td><input type=\"text\" name=\"standardval\" value=\"" + obj + "\" class=\"form-control\" placeholder=\"规格值\"><a class=\"ml10 js-delStandardInput\" href=\"javasicrpt:;\">删除</a></td></tr>";
					}
					this.dom.find("tr:last").before(str);
				}
			},
			//保存数据时的回调方法
			onSave: null,
			//打开弹窗
			open: function(data) {
				this.initDom(data);
				var _this = this;
				layer.open({
					type: 1,
					area: ['350px', '380px'],
					content: $('.standard_Dialog'),
					cancel: function() {
						_this.standerdClear();
					}
				});
			},
			init: function() {
				this.bindEvent();
			}
		};
		var PriceDialog = {
				dom: $('.price_dialog'),
				initDom: function(titleData, inputData) {
					var from = this.dom.find("form"),
						ggT = [],
						ggV = [];
					for(var obj in titleData) {
						ggT.push(obj);
						ggV.push(titleData[obj]);
					}
					$('.js-gg-t').text(ggT.join("-"));
					$('.js-gg-v').text(ggV.join("-"));
					for(var inputName in inputData) {
						from.find("input[name=" + inputName + "]").val(inputData[inputName]);
					}
				},
				//保存价格信息
				onSave: null,
				bindEvent: function() {
					var _this = this;
					//提交
					$(document).on('click', '.js-price-submit', function() {
						var form = _this.dom.find("form");
						if(!form.valid()) {
							return false;
						}
						var formInput = {};
						form.find("input").each(function() {
								formInput[this.name] = $.trim(this.value);
							})
							//屏蔽对象属性值前后空格
						Trim(formInput);
						typeof _this.onSave == 'function' && _this.onSave(formInput);
						layer.closeAll();
						_this.clear();
					});
				},
				open: function(titleData, inputData) {
					this.initDom(titleData || {}, inputData || {});
					var _this = this;
					layer.open({
						type: 1,
						area: ['350px', '380px'],
						content: $('.price_dialog'),
						cancel: function() {
							_this.clear();
						}
					});
					//绑定效验
					this.initVlidate();
				},
				initVlidate: function() {
					var _this = this;
					$.validator.addMethod("price", function(value, element, param) {
						var reg = /^(0|[1-9][0-9]{0,9})(\.[0-9]{1,2})?$/;
						return this.optional(element) || reg.test($.trim(value));
					}, "价格格式不正确");
					$.validator.addMethod("num", function(value, element, param) {
						var reg = /^(0|[1-9]\d{0,9})$/;
						return this.optional(element) || reg.test($.trim(value));
					}, "积分必须是不为负的整数");
					$.validator.addMethod("thanPrice", function(value, element, param) {
						var newValue = _this.dom.find("input[name=buyPrice]").value;
						return this.optional(element) || $.trim(newValue) * 1 > $.trim(value) * 1;
					}, "购买价格必须小于原购买价格");
					$.validator.addMethod("thanIntegral", function(value, element, param) {
						var newVlaue = _this.dom.find("input[name=integral]").value;
						return this.optional(element) || $.trim(newVlaue) * 1 > $.trim(value) * 1;
					}, "积分必须小于原兑换积分");

					//绑定效验信息
					this.dom.find("form").validate({
						onfocusout: function(element) {
							// $(element).valid();
						},
						rules: {
							buyPrice: {
								required: true,
								price: true
							},
							oldBuyPrice: {
								price: true
							},
							integral: {
								required: true,
								num: true
							},
							oldintegral: {
								num: true
							}
						},
						messages: {
							buyPrice: {
								required: '购买价格不能为空'
							},
							oldBuyPrice: {
								required: '原购买价格不能为空'
							},
							integral: {
								required: '兑换积分不能为空'
							},
							oldintegral: {
								required: '原兑换积分不能为空'
							}
						},
						errorPlacement: function(error, element) {
							layer.msg(error.text());
						},
					});
				},
				clear: function() {
					var form = this.dom.find('form');
					form.find("input").val('');
					$('.js-gg-t').val('');
					$('.js-gg-v').val('');
				},
				init: function() {
					this.bindEvent();
				}
			}
			/**
			 * @desc 新建规格
			 */
		var newStandard = function() {
				var count = 0;
				for(var property in vModel.standards) {
					count++;
				}
				if(count >= 4) {
					layer.msg("最多只能添加4个规格值");
					return false;
				}
				StandardDialog.open();
			}
			/**
			 * @desc 删除规格
			 */
		var delStandard = function() {
			var selects = standardBtr.getDom().bootstrapTable('getAllSelections');
			if(selects.length == 0) {
				layer.msg("请选中要删除的数据");
				return false;
			}
			layer.msg('确认要删除吗？', {
				time: 20000, //20s后自动关闭
				btn: ['确认', '取消'],
				yes: function() {
					var data = $.extend(true, {}, vModel.standards);
					for(var i = 0, select; select = selects[i++];) {
						delete data[select.standard];
					}
					vModel.standards = data;
					layer.closeAll();
				}
			});
		}
		var initDataModel = function() {
				vModel = new Vue({
					el: "#standardInfo",
					data: {
						priceInventory: [], //价格库存
						standards: {
							/*"(统一规格)": ["(统一规格)"]*/
						},
						standardLength: 0 //规格
					},
					watch: {
						//监听规格值的变化,重新生成表格
						"standards": {
							handler: function(newVal, oldVal) {
								priceTableProxy(newVal);
								standardBtrProxy(newVal);
							},
							deep: true
								/*immediate: false*/
						}
					}
				});
			}
			/**
			 * 规格值表 设置值的代理方法
			 * @param {Object} newVal
			 */
		var standardBtrProxy = function(newVal) {
				var tableData = [],
					merges = [];
				//格式转换
				for(var data in newVal) {
					merges.push({
						index: merges.length > 0 ? merges[merges.length - 1].index + merges[merges.length - 1].rowspan : 0, //计算合并单元格的起始位置
						field: 'standard',
						rowspan: newVal[data].length
					})
					for(var i = 0, cell; cell = newVal[data][i++];) {
						tableData.push({
							standard: data,
							standardval: cell
						});
					}
				}
				vModel.standardLength = tableData.length
				standardBtr.setData(tableData);
				//合并单元格
				for(var j = 0, merge; merge = merges[j++];) {
					standardBtr.getDom().bootstrapTable("mergeCells", merge);
					merge.field = "checkbox"
					standardBtr.getDom().bootstrapTable("mergeCells", merge);
				}
				standardBtr.resize();
			}
			/**
			 * @desc 价格和库存表设置值的代理方法
			 * @param {Object} newVal
			 */
		var priceTableProxy = function(newVal) {
				var columns = [],
					cacheArray = [],
					totalCount = 1,
					merges = [], //单元格合并信息
					fieldName, //字段名称
					fieldLength = 0, //字段对应数据长度
					preFiledLength = 0, //上一个字段 对应数据长度
					rowNumber = 0, //表格行号
					total = 1; //表格上一列 一组元素的行数
				for(var obj in newVal) {
					//生成表头
					columns.push({
						title: obj,
						field: obj,
						align: 'center',
						valign: 'middle',
					});
					//计算表格总行数
					totalCount = newVal[obj].length * totalCount;
				}
				cacheArray = new Array(totalCount);
				for(var i = columns.length - 1, len = columns.length; i >= 0; i--) {
					rowNumber = 0;
					fieldName = columns[i]["field"];
					fieldLength = newVal[fieldName].length;
					//获取当前列一组数据的个数
					try {
						preFiledLength = newVal[columns[i + 1]["field"]].length;
						total = preFiledLength * total;
					} catch(e) {

					}
					for(var j = 0; j < totalCount; j++) {
						cacheArray[j] = cacheArray[j] || {};
						if(i == columns.length - 1) {
							cacheArray[j][fieldName] = newVal[fieldName][j % fieldLength];
						} else {
							//获取单元格合并信息
							if(j % total == 0) {
								merges.push({
									index: rowNumber,
									field: fieldName,
									rowspan: total
								});
								rowNumber += total;
							}
							cacheArray[j][fieldName] = newVal[fieldName][Math.floor(j / total) % fieldLength];
						}
					}
				}
				initPriceTable(columns, cacheArray);
				//合并单元格
				for(var j = 0, merge; merge = merges[j++];) {
					priceBtr.getDom().bootstrapTable("mergeCells", merge);
				}
			}
			/**
			 * 生成库存与价格表格
			 * @param {Object} columns 列名
			 * @param {Object} data    数据
			 */
		var initPriceTable = function(columns, data) {
				var wPercent = 100 / ((columns ? columns.length : 0) + 2) + '%';
				var priceOption = $.extend({
					dom: $("#priceBtr"),
					setHeight: function() {
						return 40 + (data ? data.length * 32 : 0);
					},
					data: data || [],
					columns: [{
						field: 'price',
						align: 'center',
						valign: 'middle',
						title: '价格',
						width: wPercent,
						formatter: function(value, row, index) {
							return "<span  data-row='" + JSON.stringify(row) + "'  class='price_input' href='javascript:;'><a href='javascript:;'>未填写</a></span>"
						}
					}, {
						field: 'inventory',
						align: 'center',
						valign: 'middle',
						editable: true,
						title: '库存',
						width: wPercent,
						formatter: function(value, index, row) {
							return "未填写"
						}
					}],
					editable: {
						validate: function(value) {
							var numReg = /^(0|[1-9][0-9]{0,9})(\.[0-9]{1,2})?$/;
							value = $.trim(value);
							if(!numReg.test(value)) {
								return "库存必须为大于等于0的整数";
							};
						}
					}
				}, defaultTableOption);
				columns && (priceOption.columns = columns.concat(priceOption.columns));
				//销毁表格
				priceBtr && priceBtr.getDom().bootstrapTable('destroy');
				priceBtr = new BtrTable(priceOption);
			}
			/**
			 * @desc 加载规格表格
			 */
		var initStandardTable = function() {
			standardBtr = new BtrTable($.extend({
				dom: $("#standardBtr"),
				toolbar: '.standard_toolbox',
				checkboxHeader: false,
				setHeight: function() {
					return 58 + (vModel ? vModel.standardLength * 32 + 42 : 0);
				},
				onCheck: function(row, element) {},
				columns: [{
					checkbox: true,
					field: 'checkbox',
					align: 'center',
					valign: 'middle'
				}, {
					field: 'standard',
					align: 'center',
					valign: 'middle',
					title: '规格名',
					width: '30%'
				}, {
					field: 'standardval',
					title: '规格值',
					align: 'center',
					valign: 'middle',
					width: '30%'
				}, {
					title: '操作',
					align: 'center',
					formatter: function(value, row, index) {
						if(row.standard == "统一规格" && index == 0) {
							return "";
						}
						var obj = JSON.stringify(row);
						return '<div data-index="' + index + '" data-row=\'' + obj + '\' class="standard-row-btns"><a class="edit" href="javascript:">编辑</a>&nbsp;&nbsp;&nbsp;<a class="del" href="javascript:">删除</a></div>'
					}
				}]
			}, defaultTableOption));
		};
		/**
		 * @desc 绑定规格值表格 事件
		 */
		var bindStandardTableEvent = function() {
				$('.js-newStandard').click(newStandard);
				//删除选中的行
				$('.js-delStandard').click(delStandard);
				//编辑数据 和 删除单行数据
				standardBtr.getDom().on('click', '.standard-row-btns .edit', function() {
					var _this = $(this),
						dialog = $('.standard_Dialog'),
						row = _this.closest(".standard-row-btns"),
						row = row.data('row'),
						name = row.standard,
						vals = vModel.standards[name];
					//编辑规格数据
					StandardDialog.open({
						standard: name,
						list: vals
					});
				}).on('click', '.standard-row-btns .del', function() {
					var _this = $(this),
						row = _this.closest(".standard-row-btns"),
						row = row.data('row'),
						index = _this.data("index");
					vModel.standards[row.standard].splice(index, 1);
				});
			}
			/**
			 * @desc 绑定价格表格 事件
			 */
		var bindPriceTableEvent = function() {
				priceBtr.getDom().on('click', '.price_input', function() {
					var _this = this;
					var row = $(this).data("row"),
						inputData = $(this).data("inputData") || {};

					PriceDialog.open(row, inputData);
					PriceDialog.onSave = function(data) {
						var text = countPriceText(data);
						console.log(text);
						$(_this).html("<a href='javascript:;'>" + text + "</a>").data("inputData", data);
					}
				});
				priceBtr.getDom().on('click', 'a.editable', function() {
					//编辑文本框显示的默认值
					var text = $.trim($(this).text());
					text = text ? text : '未填写';
					$(this).editable('setValue', text != '未填写' ? text : '').text(text);
				});
			}
			/**
			 * @desc 表格中价格字段显示文本
			 * @param obj
			 * @return {string}
			 */
		var countPriceText = function(data) {
			//价格 积分都为空
			if(!(data.buyPrice * 1) && !(data.integral * 1)) {
				return "免费";
			}
			//价格积分都不为空
			if(data.buyPrice * 1 && data.integral * 1) {
				return '￥' + data.buyPrice + '  ' + data.integral + "积分"
			}
			if(data.buyPrice * 1) {
				//价格不为空 原价格 也不为空
				if(data.oldBuyPrice * 1) {
					return '￥' + data.buyPrice + "  <span class='inethrough'>￥" + data.oldBuyPrice + "</span>";
				}
				return '￥' + data.buyPrice;
			}
			if(data.integral * 1) {
				//积分不为空 原积分也不为空
				if(data.oldintegral * 1) {
					return data.integral + "积分" + "  <span class='inethrough'>" + data.oldintegral + "积分</span>";
				}
				return data.integral + "积分";
			}

		}
		var init = function() {
				StandardDialog.init();
				PriceDialog.init();
				//规格值 Dialog 保存数据回调
				StandardDialog.onSave = function(data) {
					var model = $.extend(true, {}, vModel.standards);
					//删除默认值
					delete model["统一规格"];
					model[data.standard] = data.list;
					vModel.standards = model;
				};
				initDataModel();
				//设置初始值后会默认会触发一次watch  在watch中默认实例化了 priceTable.
				setDefault();
				//initPriceTable();
				initStandardTable();
				bindStandardTableEvent();
				//价格表dom初始化有一定延迟 所以延迟 绑定事件
				setTimeout(bindPriceTableEvent, 1000);
			}
			/**
			 * @desc  设置初始值
			 */
		var setDefault = function() {
			var defaultData = {
				"standard": "统一规格",
				"list": ["统一规格"]
			};
			StandardDialog.onSave(defaultData);
		};
		/**
		 * @desc 获取第二个页面的原型数据
		 */
		var getModelData = function() {
			debugger;
			var data = priceBtr.getDom().bootstrapTable("getData"),
				priceInputDom = $(".price_input"),
				priceInputData = [];
			priceInputDom.each(function() {
				priceInputData.push($(this).data("inputData") || null);
			});
			return mergeData(priceInputData, data);
		};
		var getData = function() {
				return {
					data_info: JSON.stringify(getModelData())
				};
			}
			/**
			 * @desc 数据效验
			 * @return {boolean}
			 */
		var check = function() {
				debugger;
				var data = getModelData(),
					singleData;
				for(var i = 0; i < data.length; i++) {
					singleData = data[i];
					if(!singleData.price || !singleData.inventory) {
						layer.msg("请输入库存，和价格信息");
						return false;
					}
				}
				return true;
			}
			/**
			 * @desc 将价格数据和价格表格数据合并
			 * @param priceData
			 * @param priceTableData
			 * @return {Array}
			 */
		var mergeData = function(priceData, priceTableData) {
			for(var i = 0; i < priceTableData.length; i++) {
				priceTableData[i].price = priceData[i];
			}
			return priceTableData;
		};
		/**
		 * @desc 获取价格表表头
		 * @return {Array}
		 */
		var getPriceColumnsTitle = function() {
			var option = priceBtr.getDom().bootstrapTable("getOptions"),
				columsArray = [];
			$.each(option.columns[0], function() {
				columsArray.push(this.field);
			});
			return columsArray;
		}
		return {
			init: init,
			getData: getData,
			setDefault: setDefault,
			check: check
		}
	}
	var ThirdPanel = function() {
		var vModel;
		/**
		 * @desc 初始化第三个页面数据模型
		 */
		var initModel = function() {
				vModel = new Vue({
					el: "#thridModel",
					data: {
						area: Area,
						cityList: [], //市一级城市列表
						form: {
							limit_info: {
								type: 1, //默认不限购
								limitNum_type: 1
							},
							provinceCode: "",
							cityCode: "",
							freight_info: {
								type: 1, //默认卖家承担运费
								freight_type: 1 //默认统一运费
							},
							invoice: "",
							good_info: ""
						}
					},
					methods: {},
					ready: function() {
						var _this = this;
						/**
						 * @desc 初始化下拉选框
						 * @param dom
						 * @param option
						 */
						var initAreaSelect = function(dom, option) {
							var defaultOption = {
								"cutOff": 5
							}
							$(dom).easyDropDown("destroy");
							setTimeout(function() {
								$(dom).easyDropDown($.extend(defaultOption, option || {}));
							}, 100);
						}
						var initCitySelect = function() {
								initAreaSelect("#city", {
									onChange: function(obj) {
										_this.form.cityCode = obj.value;
									}
								});
							}
							//初始化省一级下拉选框
						initAreaSelect("#province", {
							onChange: function(obj) {
								var province = obj.value;
								_this.cityList = province == -1 ? [] : (function() {
									for(var i = 0, len = _this.area.length; i < len; i++) {
										if(_this.area[i].adcode == province) {
											return _this.area[i].list;
										}
									}
								})();
								_this.form.provinceCode = province;
								// $("#city").easyDropDown("destroy");
								//省一级的数据模型更新完成后,刷新市一级的下拉列表
								initCitySelect();
							}
						});
						//初始化市一级下拉框
						initCitySelect();
					}
				})
			}
			/**
			 * @desc 获取数据
			 * @return {}
			 */
		var getData = function() {
			var data = $.extend(true, {}, vModel.form);
			data.freight_info = JSON.stringify(data.freight_info);
			data.limit_info = JSON.stringify(data.limit_info);
			return data;
		};
		/**
		 * @desc 商品表单效验
		 */
		var check = function() {
			var numReg = /^(0|[1-9]\d{0,9})$/,
				priceReg = /^(0|[1-9][0-9]{0,9})(\.[0-9]{1,2})?$/,
				formData = getData();
			if(formData.limit_info.type == 2) {
				//商品限购效验
				if(formData.limit_info.limitNum_type == 1) {
					if(!numReg.test($.trim(formData.limit_info.limitNum))) {
						layer.msg("请正确填写商品限购件数，只支持数字，并且大0");
						return false;
					}
				}
				//商品统一规格限购
				if(formData.limit_info.limitNum_type == 2) {
					if(!numReg.test($.trim(formData.limit_info.specNum))) {
						layer.msg("请正确填写商品同一规格限购件数，只支持数字，并且大0");
						return false;
					}
				}
			}
			//效验是否选择了所在地
			if(!formData.provinceCode || !formData.cityCode) {
				layer.msg("请选择所在地");
				return false;
			}
			//邮费表单效验
			if(formData.freight_info.type == 1 && formData.freight_info.freight_type == 1) {
				var inputPy = $.trim(formData.freight_info.inputPy),
					inputPt = $.trim(formData.freight_info.inputPt),
					inputEMS = $.trim(formData.freight_info.inputEMS);
				debugger;
				//判断用户是否勾选了运费方式
				if($("#postageType .checkbox_label.check").length == 0) {
					layer.msg("请勾选统一运费方式");
					return false;
				}
				if($("input[name=inputPy]")[0].checked && !priceReg.test(inputPy)) {
					layer.msg("请输入正确的平邮，邮费，只支持大于0的数字");
					return false;
				}
				if($("input[name=inputPt]")[0].checked && !priceReg.test(inputPt)) {
					layer.msg("请输入正确的普通快递，邮费，只支持大于0的数字");
					return false;
				}

				if($("input[name=inputEMS]")[0].checked && !priceReg.test(inputEMS)) {
					layer.msg("请输入正确的EMS，邮费，只支持大于0的数字");
					return false;
				}

			}
			return true;
		};
		/**
		 * @desc 初始化第三个面板
		 */
		var init = function() {
			initModel();
		};
		return {
			init: init,
			getData: getData,
			check: check
		}
	}
		//拓展对象方法
	$.each([Panel, FirstPanel, SecondPanel, ThirdPanel], function() {
		$.extend(this, {
			getInstance: function() {
				if(!this.instance) {
					this.instance = new this();
				}
				return this.instance;
			}
		});
	});
	Panel.getInstance().init();
	FirstPanel.getInstance().init();
	SecondPanel.getInstance().init();
	ThirdPanel.getInstance().init();
});