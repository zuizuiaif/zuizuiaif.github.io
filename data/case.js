
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"JS的属性操作",
			caseList:[
				{
					caseTitle:"JS热身运动练习",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/简单元素操作.gif",
					caseDescription:"简单的属性操作，更改某一个元素的属性，达成需要的要求",
					caseWebsite:"./案例/元素属性操作/index.html"
				},
				{
					caseTitle:"留言板",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/留言板.gif",
					caseDescription:"模拟好友留言，更改某个元素的内容，达成需要的要求",
					caseWebsite:"./案例/修改内容/留言板.html"
				},
				{
					caseTitle:"添加div",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/添加div.gif",
					caseDescription:"更改某个元素的内容，写入一些html标签（如div），达成需要的要求",
					caseWebsite:"./案例/修改内容/添加div.html"
				},
				{
					caseTitle:"改变img的src",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/改变img的src.gif",
					caseDescription:"以更改img的src为操作，可以用来切换图片",
					caseWebsite:"./案例/改变img的src/改变img的src.html"
				}
			]
		},
		{
			caseName:"if、for应用this的使用",
			caseList:[
				{
					caseTitle:"模拟qq聊天",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/模拟qq聊天.gif",
					caseDescription:"模拟qq聊天，用if判断来确定是谁发的消息，来渲染页面",
					caseWebsite:"./案例/模拟qq聊天/模拟qq聊天.html"
				},
				{
					caseTitle:"图片切换",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/图片切换.gif",
					caseDescription:"模拟图片切换播放，两种模式，一种可以无限循环，另外一种有边界，到边界提示。",
					caseWebsite:"./案例/图片切换/图片切换.html"
				},
				{
					caseTitle:"生成V字形",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/生成V字形.gif",
					caseDescription:"利用for循环来生成div，拼成V字形状",
					caseWebsite:"./案例/生成V字形/生成V字形.html"
				},
				{
					caseTitle:"相册切换",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/相册切换.gif",
					caseDescription:"点击上一页或者下一页，两个相框的图片同时切换，单点某一张图片的时候，当前相框的图片切换。",
					caseWebsite:"./案例/相册切换/相册切换.html"
				},
				{
					caseTitle:"100个div覆盖图",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/100个div覆盖图.gif",
					caseDescription:"利用for循环来生成div，给每个div添加移入事件，可以达到需要的这种效果",
					caseWebsite:"./案例/100个div覆盖图/100个div覆盖图.html"
				},
				{
					caseTitle:"v型4方向》",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/v型4方向》.gif",
					caseDescription:"利用for循环来生成div，拼成V字形状，每次生成的方向不同",
					caseWebsite:"./案例/v型4方向》/v型4方向》.html"
				}
			]
		},
		{
			caseName:"自定义属性、索引值",
			caseList:[
				{
					caseTitle:"选项卡",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/选项卡.gif",
					caseDescription:"利用自定义属性和索引值来判断点的哪一个选项，从而渲染对应的选项内容。",
					caseWebsite:"./案例/选项卡/选项卡.html"
				},
				{
					caseTitle:"多选",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/多选.gif",
					caseDescription:"利用自定义属性开关来判断当前点击的元素的开关的真假，真的加上需要的属性，假的去掉",
					caseWebsite:"./案例/多选/多选.html"
				},
				{
					caseTitle:"模拟qq好友列表",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/模拟qq好友列表.gif",
					caseDescription:"利用自定义属性和索引值来判断点的是哪一个，在检查当前点击的自定义开关的真假，如果为真显示，为假隐藏<br>当点击里面的好友使选中或取消选中。列表关闭时，则里面选择的全部取消。",
					caseWebsite:"./案例/模拟qq好友列表/模拟qq好友列表.html"
				},
				{
					caseTitle:"轮播",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/轮播.gif",
					caseDescription:"利用自定义属性保存下标，每次点击更新保存的下标，同时小点切换</br>鼠标放在小点的时候显示缩略图，点击的时候更新下标，切换图片。",
					caseWebsite:"./案例/轮播/轮播.html"
				},
				{
					caseTitle:"淘宝评分",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/淘宝评分.gif",
					caseDescription:"模仿淘宝的评分，点击的时候保存星星，移入不点击只显示不保存，前两个差，为灰色。<br>注：移入比点击高级。",
					caseWebsite:"./案例/淘宝评分/淘宝评分.html"
				},
				{
					caseTitle:"模拟音乐全选单选",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/模拟音乐全选单选.gif",
					caseDescription:"模拟音乐全选单选，鼠标移入变色，移除没色。勾选后变色。移入移出没效果。<br>点击全选全部选择，单点某一个某一个选中。",
					caseWebsite:"./案例/模拟音乐全选单选/模拟音乐全选单选.html"
				}
			]
		},
		{
			caseName:"JS数据类型、类型转换",
			caseList:[
				{
					caseTitle:"qq验证",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/qq验证.gif",
					caseDescription:"用JS的数据类型检测，来模拟验证输入的qq是否正确",
					caseWebsite:"./案例/qq验证/qq验证.html"
				},
				{
					caseTitle:"找到需要的值",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/找到需要的值.gif",
					caseDescription:"有一串数，利用js数据类型的判断，从这些数中选择需要的数",
					caseWebsite:"./案例/找到需要的值/找到需要的值.html"
				}
			]
		},
		{
			caseName:"函数传参、重用、价格计算",
			caseList:[
				{
					caseTitle:"利用函数传参调用修改内容",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/利用函数传参调用修改内容.gif",
					caseDescription:"利用了函数的传参和调用，修改某一项的内容然后保存，不保存的时候恢复上一次的类容",
					caseWebsite:"./案例/修改内容/利用函数传参调用修改内容.html"
				},
				{
					caseTitle:"电视排行榜",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/电视排行榜.gif",
					caseDescription:"利用了函数的传参和调用，模拟优酷的播放排行榜。",
					caseWebsite:"./案例/电视排行榜/电视排行榜.html"
				},
				{
					caseTitle:"模仿商场首页推广",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/模仿商场首页推广.gif",
					caseDescription:"利用了函数的传参和调用，模拟商场首页推广。",
					caseWebsite:"./案例/模仿商场首页推广/模仿商场首页推广.html"
				}
			]
		},
		{
			caseName:"运算符流程控制",
			caseList:[
				{
					caseTitle:"价格计算",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/价格计算.gif",
					caseDescription:"利用运算符的计算规则，模仿购物车的计算原理，做出一个商品累加计算的一个效果",
					caseWebsite:"./案例/价格计算/价格计算.html"
				}
			]
		},
		{
			caseName:"定时器管理、函数封装",
			caseList:[
				{
					caseTitle:"自动轮播图",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/自动轮播图.gif",
					caseDescription:"利用运动函数Mtween，做出一个自动轮播的小例子。</br>不点击一直自动，点击则按点击方向，放在点击地方停止播放。",
					caseWebsite:"./案例/自动轮播图/自动轮播图.html"
				},
				{
					caseTitle:"淡隐淡出",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/淡隐淡出.gif",
					caseDescription:"利用运动函数Mtween，做出一个淡隐淡出的小例子。</br>不点击一直自动淡隐淡出，点击则按点击方向淡隐淡出，放在点击地方停止淡隐淡出。",
					caseWebsite:"./案例/淡隐淡出/淡隐淡出.html"
				},
				{
					caseTitle:"无缝滚动加小点",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/无缝滚动加小点.gif",
					caseDescription:"利用运动函数Mtween，做出一个自动轮播的小例子。</br>不点击一直自动，点击则按点击方向，放在点击地方停止播放。点击小点跳转小点对应的地方",
					caseWebsite:"./案例/无缝滚动加小点/无缝滚动加小点.html"
				},
				{
					caseTitle:"方块移动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/方块移动.gif",
					caseDescription:"用for循环生成div，按顺序依次下落或者上升",
					caseWebsite:"./案例/方块移动/方块移动.html"
				}
			]
		},
		{
			caseName:"日期对象、时钟倒计时",
			caseList:[
				{
					caseTitle:"时间滚动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/时间滚动.gif",
					caseDescription:"模拟当前的时间，在用Mtween运动函数，达到需要的要求",
					caseWebsite:"./案例/日期时间/时间滚动.html"
				}
			]
		},
		{
			caseName:"字符串、查找高亮显示",
			caseList:[
				{
					caseTitle:"文字搬运工",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/文字搬运工.gif",
					caseDescription:"把一边的文字搬运到另一边，利用字符串的方法加上Mtween函数，达到需要的需求",
					caseWebsite:"./案例/搬运查找替换/文字搬运工.html"
				},
				{
					caseTitle:"修改内容",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/修改内容.gif",
					caseDescription:"利用字符串的方法，查找需要的内容加上新的class，替换是先找到需要的，然后更改。",
					caseWebsite:"./案例/搬运查找替换/修改内容.html"
				},
				{
					caseTitle:"消除表情小游戏",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/消除表情小游戏.gif",
					caseDescription:"这是一个综合小练习，是运用JS的相关方法以及一些逻辑来实现的小游戏，可玩性极高哦~",
					caseWebsite:"./案例/消除表情小游戏/消除表情小游戏.html"
				}
			]
		},
		{
			caseName:"数据操作",
			caseList:[
				{
					caseTitle:"表格列表数据操作",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/表格列表数据操作.gif",
					caseDescription:"有一个数据，对这个数据进行增添改查的一系列的操作",
					caseWebsite:"./案例/表格列表数据操作/表格列表数据操作.html"
				}
			]
		}
]