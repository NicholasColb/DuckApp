app.directive('fadeout', function(){
    return {
        link: function(scope, elm){
			
			$(elm).css('padding', '100px');
			
			
			$(document).on('scroll', function() {
			var bottomScollPos = $(document).scrollTop() + $(window).height();  
			var elemOffsetTop = $(elm).offset().top;
				if(bottomScollPos > elemOffsetTop)
				$(elm).css('opacity', (bottomScollPos-elemOffsetTop-150)/550);
			});
	
	
			
			
			
          
        }
    }
});