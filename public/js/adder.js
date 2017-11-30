
	/* CURRENTLY REDUNDANT CODE


$(document).ready(function(){
		
		
		
		
        $("#submit").click(function(){
          var ide,date,time,descr,spec,cou;
			
		  date = $("#date1").val();						//since input type date-time is not widely supported, combining values date and time.
		  time = $("#time1").val();
		  var dt = date + "T" + time + ":00Z";
		  descr= $("#description1").val();
		  spec=$("#species1").val();
		  cou=$("#count1").val();
		  
		  //check that number isn't negative or 0
		  //check that every field has something
		  //date straight from calendar?
		  //TODO 
		  
		  
			var result = false; 
			  
			$.get("http://localhost:8081/species",function(data,status){
				
				for(var i = 0; i < data.length; i++) {
					
					if(data[i].name === spec) { 
					result = true;
					console.log('was in array');
					$.post("http://localhost:8081/sightings",{id:ide,species:spec,description:descr,dateTime:dt,count:cou});
					return
					} else {
					console.log('was not in array');
					}
					
					
				}
				
			});
			
			  
		
          
        });
		
		
		
    });
	*/
	  
	  