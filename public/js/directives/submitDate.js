//a directive to handle the jquery datepicker
app.directive('submitdate', function(){
    return {
        link: function(scope, elm){
			
			$(elm).datepicker({
				dateFormat: 'yy-mm-dd',
				onSelect : function (dateText, inst) {
					scope.changeSelectionData('date',dateText,true);
					
				}
			});	
        }
    }
});

 