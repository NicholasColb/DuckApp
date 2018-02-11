var serverURL= '';


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

function topFunction() {
	$('.currentInfo').hide();
	function rec() {
		
		
		if(document.documentElement.scrollTop < 20) {
			document.documentElement.scrollTop = 0;
			
			$('.currentInfo').fadeIn();
			return;
		} else {
			
			document.body.scrollTop -= 20; // Safari
			document.documentElement.scrollTop -= 40; // Chrome
			window.setTimeout(rec,[4]);
		}
	};
	
	rec();
}

function scrollFunction() {
	
	function rec(scrollBefore) {
		
		
		if(document.documentElement.scrollTop + document.body.scrollTop > window.innerHeight - 60 || window.innerHeight + document.documentElement.scrollTop + document.body.scrollTop >= $(document).height() ) {
			document.documentElement.scrollTop = window.innerHeight;
			return;
		} else {
			
			document.body.scrollTop += 20; // Safari
			document.documentElement.scrollTop += 40; // Chrome
			if(scrollBefore == document.documentElement.scrollTop) { return ; }
			setTimeout(function() { rec(document.documentElement.scrollTop) },4);
		}
	};
	
	rec(document.documentElement.scrollTop);
}