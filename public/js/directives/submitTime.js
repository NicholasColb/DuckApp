app.directive('submittime', function(){
    return {
        link: function(scope, elm){
			
			$(elm).bootstrapMaterialDatePicker({ date: false, format : 'HH:mm' });
			
			
			
			
			
			
			
        }
    }
});

/*
app.directive('submittime', function(){
    return {
        link: function(scope, elm){
			
			$(elm).timepicki({
		show_meridian:false,
		min_hour_value:0,
		max_hour_value:23,
		overflow_minutes:true,
		increase_direction:'up',
		disable_keyboard_mobile: true});
			
			
			
			
			
        }
    }
});*/