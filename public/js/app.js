var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/sightings', { 
      controller: 'MainController', 
      templateUrl: 'views/home.html' 
    }) 
  	.when('/sightings/:id', {
    	controller: 'SightingController',
    	templateUrl: 'views/sighting.html'
  })
	.when('/submit', {
    	controller: 'MainController',
    	templateUrl: 'views/submit.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
	
});


