$(document).ready(function(){
	$(".open-menu").on("click", function(){

		$(".hamburger-menu").toggleClass("hidden");		
	});

	$(".delete-button").on("click", function(){
		$(".hamburger-menu").toggleClass("hidden");
	});

	$(".use-my-location").on("click", function(){

		if ("geolocation" in navigator) {

  		/* geolocation is available */
  			navigator.geolocation.getCurrentPosition(function(position) {
  				console.log(position.coords.latitude, position.coords.longitude);
			});
		}

	});

	$("#myCarousel").swiperight(function() {
      $(this).carousel('prev');
    });

   $("#myCarousel").swipeleft(function() {
      $(this).carousel('next');
   });
   $(".ui-loader").remove();
});