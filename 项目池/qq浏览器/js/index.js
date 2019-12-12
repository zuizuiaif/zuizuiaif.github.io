var index = 0;
var timer = 0;

$(function(){
	var content1Html = '<h1 class="title"></h1>\
		<div class="versions">\
			<a href="javascript:;"><img src="./img/versions.png"></a>\
			<a href="javascript:;"><img src="./img/btn.png"></a>\
			<p><span>9月12日更新9.5正式版</span></p>\
		</div>\
		<div class="skin"></div>\
		<div class="skin2"></div>\
		<div class="scrolling"></div>'
	var content2Html = '<div class="clock">\
			<div class="needle"></div>\
			<div class="character"></div>\
		</div>\
		<div class="core">\
			<p>全新急速体验,源于 Chromium50 高速内核</p>\
		</div>'
	var content3Html = '<div class="frame">\
			<div class="blue"></div>\
			<div class="babBlue"></div>\
			<div class="navFrame">\
				<span class="span1"></span>\
				<span class="span2"></span>\
				<span class="span3"></span>\
			</div>\
			<div class="concise"></div>\
		</div>\
		<p class="abstract">清爽舒展的界面，鲜艳明快的色彩和干净利落的功效，让浏览畅快愉悦</p>'
	var content4Html = '<img src="./img/p2pop1.png" class="img1">\
		<img src="./img/p2pop3.png" class="img2">\
		<img src="./img/p2pop4.png" class="img3">\
		<img src="./img/p2pop2.png" class="img4">\
		<img src="./img/p2t1.png" class="img5">\
		<p class="C4p">内置微信聊天等应用，兼容Chrome扩展体系，应用中心为您提供海量海量拓展</p>'
	var W = $(window).width()
	var H = $(window).height()




	//板块1内容
	$.content1 = function(){
		var W = $(window).width()
		var H = $(window).height()
		timer = 0
		$("#content").css({
			width:W*0.6,
			height:H*0.8,
			marginTop:H*0.2/2
		})
		$(".skin").animate({
			top:0,
			left:0
		},700,function(){
			$(this).css({
				webkitTransform:"scale(1)"
			})
		})
		$(".skin2").animate({
			top:0,
			left:0
		},700,function(){
			$(this).css({
				webkitTransform:"scale(1)"
			})
		})
		$(".title").delay(500).animate({
			opacity: 1
		},1000)
		$(".versions a:eq(0)").delay(500).animate({
			opacity: 1
		},3000)
		$(".versions a:eq(1)").delay(500).animate({
			opacity: 1
		},2000)
		$(".versions p").delay(500).animate({
			opacity: 1
		},2000)
		setTimeout(function(){
			timer = 1
		},2000)
	}
	$.content1()
	//球生成运动
	for (var i = 0; i < 7; i++) {
		$("#ball").prepend("<div class = 'ball ball"+i+"'><div></div></div>")
	}
	$.Xexercise0 = function(){
		$(".ball0").animate({
			right:W
		},9500,function(){
			$(this).css({
				right:-($(this).width())
			})
			$.Xexercise0()
		})
	}
	$.Xexercise1 = function(){
		$(".ball1").animate({
			right:W
		},13500,function(){
			$(this).css({
				right:-($(this).width())
			})
			$.Xexercise1()
		})
	}
	$.Xexercise2 = function(){
		$(".ball2").animate({
			right:W
		},11500,function(){
			$(this).css({
				right:-($(this).width())
			})
			$.Xexercise2()
		})
	}
	$.Xexercise3 = function(){
		$(".ball3").animate({
			right:W
		},17000,function(){
			$(this).css({
				right:-($(this).width())
			})
			$.Xexercise3()
		})
	}
	$.Xexercise4 = function(){
		$(".ball4").animate({
			right:W
		},10800,function(){
			$(this).css({
				right:-($(this).width())
			})
			$.Xexercise4()
		})
	}
	$.Xexercise5 = function(){
		$(".ball5").animate({
			right:W
		},17500,function(){
			$(this).css({
				right:-($(this).width())
			})
			$.Xexercise5()
		})
	}
	$.Xexercise6 = function(){
		$(".ball6").animate({
			right:W
		},12500,function(){
			$(this).css({
				right:-($(this).width())
			})
			$.Xexercise6()
		})
	}
	$(".ball0").animate({
		top:100,
		right:20
	},1500,function(){
		$.Xexercise0()
	})
	$(".ball1").animate({
		top:200,
		right:0
	},1500,function(){
		$.Xexercise1()
	})
	$(".ball2").animate({
		top: 230,
		right: 700
	},1500,function(){
		$.Xexercise2()
	})
	$(".ball3").animate({
		top: 150,
		right: 300
	},1500,function(){
		$.Xexercise3()
	})
	$(".ball4").animate({
		right: 1000,
		top: 150
	},1500,function(){
		$.Xexercise4()
	})
	$(".ball5").animate({
		top:200,
		right:0
	},1500,function(){
		$.Xexercise5()
	})
	$(".ball6").animate({
		right: 450,
		top: 350
	},1500,function(){
		$.Xexercise6()
	})


	//板块2内容
	$.content2 = function(){
		var W = $(window).width()
		var H = $(window).height()
		timer = 0
		$("#content").css({
			width:W*0.6,
			height:H*0.8,
			marginTop:H*0.2/2
		})
		$(".clock").css({
			webkitTransform:"rotateY(0)",
			opacity:1,
			top:0,
			left:280
		}).delay(600).animate({
			marginTop:-1500
		},10,function(){
			$(this).css({
				webkitTransform:"scale(20)",
				opacity:0
			})
			$(".core").css({
				webkitTransform:"scale(1)",
				opacity:1
			})
			setTimeout(function(){
				timer = 1
			},1500)
		})
		$(".needle").css({
			webkitTransform:"rotateZ(0)"
		})
		$(".character").css({
			webkitTransform:"rotateZ(0)",
			opacity:1,
			top:0,
			left:0
		})
	}
	
	//板块3内容
	$.content3 = function(){
		var W = $(window).width()
		var H = $(window).height()
		timer = 0
		$("#content").css({
			width:W*0.6,
			height:H*0.8,
			marginTop:H*0.2/2
		})
		$(".frame").css({
			transform: "rotateX(30deg) skewX(-5deg)"
		})
		$(".concise").css({
			transform: "scale(1)",
			opacity: 1,
			top: "200px"
		})
		$(".abstract").css({
			opacity: 1
		})
		setTimeout(function(){
			timer = 1
		},3000)
	}
	//板块4内容
	$.content4 = function(){
		var W = $(window).width()
		var H = $(window).height()
		timer = 0
		$("#content").css({
			width:W*0.6,
			height:H*0.8,
			marginTop:H*0.2/2
		})
		$(".img1").css({
			top: -20,
			left: 170,
			transform: "rotateY(0deg) rotateX(0deg)"
		})
		$(".img2").css({
			top: -20,
			left: 210,
			transform: "rotateY(0deg) rotateX(0deg)"
		})
		$(".img3").css({
			top: -30,
			left: 480,
			transform: "rotateY(0deg) rotateX(0deg)"
		})
		$(".img4").css({
			top: 210,
			left: 180,
			transform: "rotateY(0deg) rotateX(0deg)"
		})
		$(".img5").css({
			top: 310,
			left: 210,
			transform: "rotateY(0deg) scale(1)",
			opacity: 1
		})
		$(".C4p").css({
			opacity: 1
		})
		setTimeout(function(){
			timer = 1
		},3000)
	}
	//开始渲染页面
	$.scroll0 = function(){
		$("#header").css({
			opacity:0
		})
		$(".nav1").css({
			opacity:0
		})
		index = 0;
		$("#content").html(content1Html)
		$.content1()
		$("#ball").css({
			webkitTransform:"rotateZ("+index*360+"deg)"
		})
		$("#dot span").removeAttr("class")
		$("#dot span").eq(index).addClass("onDot")
		$(".scrolling").on("click",$.scroll1)
	}
	$.scroll1 = function(){
		$("#header").css({
			opacity:1
		})
		$(".nav1").css({
			opacity:0
		})
		$(".core").css({
			webkitTransform:"scale(20)",
			opacity:1
		})
		index = 1;
		$("#content").html(content2Html)
		$.content2()
		$("#ball").css({
			webkitTransform:"rotateZ("+index*360+"deg)"
		})
		$("#dot span").removeAttr("class")
		$("#dot span").eq(index).addClass("onDot")
	}
	$.scroll2 = function(){
		$("#header").css({
			opacity:1
		})
		$(".nav1").css({
			opacity:0
		})
		index = 2;
		$("#content").html(content3Html)
		$.content3()
		$("#ball").css({
			webkitTransform:"rotateZ("+index*360+"deg)"
		})
		$("#dot span").removeAttr("class")
		$("#dot span").eq(index).addClass("onDot")
	}
	$.scroll3 = function(){
		$("#header").css({
			opacity:1
		})
		$(".nav1").css({
			opacity:1
		})
		index = 3;
		$("#content").html(content4Html)
		$.content4()
		$("#ball").css({
			webkitTransform:"rotateZ("+index*360+"deg)"
		})
		$("#dot span").removeAttr("class")
		$("#dot span").eq(index).addClass("onDot")
	}
	//在板块1有一个点击到板块2的效果
	$(".scrolling").on("click",$.scroll1)
})