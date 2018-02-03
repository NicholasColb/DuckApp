//A directive to handle the timepicker plugin.
app.directive('submittime', function(){
    return {
        link: function(scope, elm){
			
			$(elm).bootstrapMaterialDatePicker({ date: false, format : 'HH:mm' });			
	
        }
    }
});

