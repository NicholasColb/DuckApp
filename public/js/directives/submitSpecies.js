app.directive('submitspecies', function(){
    return {
        link: function(scope, elm){
			
			scope.loadSpecies();
			$(elm).onchange = function() {
				alert($(elm).val());
			
			}
			
			
			
        }
    }
});