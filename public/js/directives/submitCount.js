
//a directive to display the numberPicker plugin
app.directive('submitcount', function(){
    return {
        link: function(scope, elm){
			$(".demo").WanSpinner({minValue: 1, start:1,inputWidth: 400});
        }
    }
});

 