$(function () {
	setInterval(fnSlide, 6000);

	function fnSlide() {

		$("#main #shuttleFrame").animate({
				"margin-left": "-1260px"
			},
			2000,
			"swing",
			function () {
				$("#main #shuttleFrame a:first-child").insertAfter("#main #shuttleFrame a:last-child");
				$("#main #shuttleFrame").css({
					"margin-left": "0px"
				});
			}
		);

	}

	/* 상단 고객센터 메뉴 */
	$(function () {
	$("#mainLi:first-child").mouseover(function(){
		$(".subMenu").css({"display": "block"});
	});
	$("#mainLi:first-child").mouseout(function(){
		$(".subMenu").css({"display": "none"});
	});
});

});
