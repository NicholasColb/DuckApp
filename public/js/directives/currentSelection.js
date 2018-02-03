//a directive to change the enlarged, selected sighting to a "no sightings yet" text if there are no sightings

app.directive('currentSelection', function() { 
  return {  
	restrict: 'E',
    templateUrl: 'js/directives/currentSelection.html',
	link: function(scope, elm){
		
		if(scope.apps.length == 0) {

			document.getElementById('currentInfoImage').src="images/duckAlt.png";

			var infoBox = document.getElementById('currentInfo');
			while(infoBox.firstChild) {
				infoBox.removeChild(infoBox.firstChild);
			}

			var p = document.createElement("p");
			var t = document.createTextNode("No sightings yet!");  

			p.appendChild(t);
			infoBox.appendChild(p);
		
			p.style.textAlign="center";
			p.style.lineHeight="60vh";
			p.style.fontSize="2vw";
			p.style.color="grey";
							
		}
	}
  }; 
});