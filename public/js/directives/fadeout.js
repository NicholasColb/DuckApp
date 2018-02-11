
/*
  Some simple jQuery to make the elements fade in and out on scroll.
  Plugin code extracted from https://www.jqueryscript.net/slider/Fade-In-Out-Content-On-Scroll-jQuery.html
  Format changed to suit the project; injected into directive.
*/


app.directive('fadeout', function(){
    return {
        link: function(scope, elm){
		
			$(document).on('scroll', function() {
				var bottomScollPos = $(document).scrollTop() + $(window).height();  
				var elemOffsetTop = $(elm).offset().top;			
				if(bottomScollPos > elemOffsetTop) $(elm).css('opacity', (bottomScollPos-elemOffsetTop)/550);
			});
			
	
   
        }
    }
});