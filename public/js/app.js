var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/sightings/:order', { 
      controller: 'MainController', 
      templateUrl: 'views/home.html' 
    }) 
  	.when('/sighting/:id', {
    	controller: 'SightingController',
    	templateUrl: 'views/sighting.html'
  })
	.when('/submitdate', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitDate.html'
  })
	.when('/submittime', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitTime.html'
  })
	.when('/submitspecies', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitSpecies.html'
  })
	.when('/submitcount', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitCount.html'
  })
	.when('/submitdescription', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitDescription.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
	
});


