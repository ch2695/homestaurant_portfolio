$(function(){

	/* 상단 고객센터 메뉴 */
		$("#mainLi:first-child").mouseover(function () {
			$(".subMenu").css({"display": "block"});
		});
		$("#mainLi:first-child").mouseout(function () {
			$(".subMenu").css({"display": "none"});
		});

	/* GNB 메뉴 */
	$("#header_gnb>ul>li:first-child").mouseover(function(){
		$(".gnb_subMenu").css({"display": "block"});
	});
	$("#header_gnb>ul>li:first-child").mouseout(function(){
		$(".gnb_subMenu").css({"display": "none"});
	});
});
