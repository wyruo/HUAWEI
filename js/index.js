$(document).ready(function(){
	$(".website").click(function(){/*黑色顶部下拉框  集团网站*/
		$(".websiteContainer").slideToggle("slow");
		$(".electContainer").slideUp();
	});
	$(".elect").click(function(){/*黑色顶部下拉框  选择区域/语言*/
		$(".electContainer").slideToggle("slow");
		$(".websiteContainer").slideUp();
	});
	$(".searchOpen").click(function(){/*白色顶部 搜索框部分*/
		$(".searchOpen").hide();
		$(".whiteTopCenter").hide();
		$(".searchClose").show();
	});
	$(".guan").click(function(){/*白色顶部 搜索框部分*/
		$(".searchClose").hide();
		$(".searchOpen").show();
		$(".whiteTopCenter").show();
	});
	$(".searchSuo-search").click(function(){/*缩放后 搜索图标 */
		$(".hw").hide();
		$(".searchSuo").hide();
		$(".searchClose").show();
	});
	$(".searchSuo-center").click(function(){
		
	});
});