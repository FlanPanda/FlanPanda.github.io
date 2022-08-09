$(document).ready(function(){
	$(".box-right").click(function(){
		if($(".box-right").hasClass("active")){
			$(".box-right.active").removeClass("active");
			// setTimeout(function(){
			// 	$(".hamburger")}, 300)
		} else {
			$(".box-right").addClass("active")
		}
	});

	// $(".box-right").hover(function(){
	// 	$(".box-right").toggleClass("hover")
	// });
});