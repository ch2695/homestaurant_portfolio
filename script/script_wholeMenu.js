$(function(){
	$(".pagination ul li:first-child").click(function(){
		$(".pagination ul li").removeClass("selected");
		$(this).addClass("selected");
		$("#goods_list_1").css({"display": "flex"});
		$("#goods_list_2").css({"display": "none"});
	});
	$(".pagination ul li:nth-child(2)").click(function(){
		$(".pagination ul li").removeClass("selected");
		$(this).addClass("selected");
		$("#goods_list_1").css({"display": "none"});
		$("#goods_list_2").css({"display": "flex"});
	});
});
