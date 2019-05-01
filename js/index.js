$(document).ready(function() {
	$(".website").click(function() { /*黑色顶部下拉框  集团网站*/
		$(".websiteContainer").slideToggle("slow");
		$(".electContainer").slideUp();
	});
	$(".elect").click(function() { /*黑色顶部下拉框  选择区域/语言*/
		$(".electContainer").slideToggle("slow");
		$(".websiteContainer").slideUp();
	});
	$(".searchOpen").click(function() { /*白色顶部 搜索框部分*/
		$(".searchOpen").hide();
		$(".whiteTopCenter").hide();
		$(".searchClose").show();
		$(".all").show();
	});
	$(".guan").click(function() { /*白色顶部 搜索框部分*/
		$(".searchClose").hide();
		$(".searchOpen").show();
		$(".whiteTopCenter").show();
		$(".all").hide();
	});
	$(".searchSuo-search").click(function() { /*缩放后 搜索图标 */
		$(".hw").hide();
		$(".searchSuo").hide();
		$(".searchClose").show();
	});
	$(".searchSuo-center").click(function() {

	});
     //导航栏
     $(window).scroll(function(){       
     	var scrollY = $(document).scrollTop();
     	var scrollYY=0;
     	if(scrollY>30){
     		$(".whiteTop").css("position","fixed");
     		$(".whiteTop").css("top","0");
     		$(".whiteTop").css("z-index","1");
     	}else{
     		$(".whiteTop").css("position","absolute");
     		$(".whiteTop").css("top","30px");
     	}
     	setTimeout(function(){
     		var scrollYY = $(document).scrollTop();
     		if(scrollYY>scrollY){
     			scrollY = scrollYY;
     		$(".whiteTop").hide();
	     	}else{scrollY = scrollYY;
	     		$(".whiteTop").show();
	     	} 	
     	},1000);
     	
     });
     
	//白色顶部 手机、笔记本等  选项卡
	$("#tab1").mouseenter(function() {
		$(".classifyYin1").slideDown("slow");
	});
	$("#tab1").mouseleave(function() {
		$(".classifyYin1").hide();
	});
	$(".classifyYin1").mouseenter(function() {
		$(".classifyYin1").show();
	});
	$(".classifyYin1").mouseleave(function() {
		$(".classifyYin1").hide();
	});

	//白色顶部 解决方案等  选项卡
	$("#tab2").mouseenter(function() {
		$(".classifyYin2").slideDown("slow");
	});
	$("#tab2").mouseleave(function() {
		$(".classifyYin2").hide();
	});
	$(".classifyYin2").mouseenter(function() {
		$(".classifyYin2").show();
	});
	$(".classifyYin2").mouseleave(function() {
		$(".classifyYin2").hide();
	});

	//白色顶部 解决方案    里面的选项卡
	$(".classifyYinTitleLi1").click(function() {
		$(".tabcontent1").show();
		$(".tabcontent2").hide();
		$(".tabcontent3").hide();
	});
	$(".classifyYinTitleLi2").click(function() {
		$(".tabcontent1").hide();
		$(".tabcontent2").show();
		$(".tabcontent3").hide();
	});
	$(".classifyYinTitleLi3").click(function() {
		$(".tabcontent1").hide();
		$(".tabcontent2").hide();
		$(".tabcontent3").show();
	});
	//轮播图
		var $lunBoTu = $(".lunBoTu");
		$picLi = $(".lunBoTu .pic li");
		$tabLi = $(".lunBoTu .tab li");
		$btnLi = $(".lunBoTu .btn li");
		len = $tabLi.length;

		first = 0;
		//初始化设置
		$picLi.hide().eq(0).show(); //隐藏$picLi 然后显示第一个
		$tabLi.eq(0).addClass("on");
		//tab区域
		$tabLi.click(function() {
			var x = $(this).index(); //tabLi[i].index = i;
			if(x != first) {
				change(x);
			}
		});
		//btn区域
		$btnLi.click(function() {
			var x = first;
			if($(this).index()) { //这里的index()就0 1两个值
				x++;
				x %= len;
			} else {
				x--;
				if(x < 0) x = len - 1;
			}
			change(x);
		});

		//自动轮播
		auto();

		$lunBoTu.hover(function() {
			clearInterval(timer);
		}, auto);

		function auto() {
			timer = setInterval(function() {
				var x = first;
				x++;
				x %= len;
				change(x);
			}, 6000)
		}
		//变化函数
		function change(i) {
			$picLi.eq(first).fadeOut(4000);
			$tabLi.eq(first).removeClass("on");
			first = i;
			$picLi.eq(first).fadeIn(4000);
			$tabLi.eq(first).addClass("on");
		}
		

	
});

