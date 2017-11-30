app.filter('timee', function() {

	return function(string) {
		var a = new Date(string);
		function wrapTime(time) {
			
			if(time<10) {
				return "0" + time.toString();
			} else {
				return time.toString();
			}
			
		};
		
		
		return a.getDate() + "." + a.getMonth() + "." + a.getFullYear() + "   " + wrapTime(a.getHours()) + ":" + wrapTime(a.getMinutes());
	};

});