app.factory('currentSelect', function() {
	
	var current = {
		date : 'anonymous',
		time : 'anonymous',
		species : 'anonymous',
		count : 'anonymous',
		description : 'anonymous'
	
	};
	
	
  return {
		getData : function () {

            return current; //we need some way to access actual variable value
        },
        changeData : function(dataType,data) {
           current[dataType] = data;
		   console.log("The data was changed. Now we have" + current.date + current.time + current.species + current.count + current.description);
        },
		getNextOne : function(dataType) {
			var array = ['date','time','species','count','description'];
			return array.slice(array.indexOf(dataType) + 1)[0];
		}
  };
});