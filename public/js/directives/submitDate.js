app.directive('submitdate', function(){
    return {
        link: function(scope, elm){
			
			$(elm).datepicker({
				onSelect : function (dateText, inst) {
					scope.changeSelectionData('date',dateText,true);
				}
			});
			
			
			
        }
    }
});

 