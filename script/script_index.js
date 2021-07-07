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

});



