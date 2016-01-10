$(document).ready(function(){
	$(".open-menu").on("click", function(){

		$(".hamburger-menu").toggleClass("hidden");		
	});

	$(".delete-button").on("click", function(){
		$(".hamburger-menu").toggleClass("hidden");
	});
});