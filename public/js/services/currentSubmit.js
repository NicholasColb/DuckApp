//holds the user's current inputted data of a new sighting and communicates with the controller through the functions getData, changeData and getNextOne
app.factory('currentSubmit', function() {
	
	var current = {												//The variable "current" stores the actual data
		date : '',
		time : '',
		species : '',
		count : '',
		description : ''
	
	};
	
	
  return {
		getData : function () {										
            return current; 
        },
        changeData : function(dataType,data) {
           current[dataType] = data;
        },
		getNextOne : function(dataType) {
			var array = ['date','time','species','count','description'];
			return array.slice(array.indexOf(dataType) + 1)[0];
		}
  };
});