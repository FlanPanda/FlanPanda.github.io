$(document).ready(function(){
	$(".box-right, .nav-overlay").click(function(){
		if($(".box-right").hasClass("active")){
			$(".box-right.active, .side-nav.active, .nav-overlay.active").removeClass("active");
			// setTimeout(function(){
			// 	$(".hamburger")}, 300)
		} else {
			$(".box-right, .side-nav, .nav-overlay").addClass("active")
		}
	});

	// $(".box-right").hover(function(){
	// 	$(".box-right").toggleClass("hover")
	// });
});