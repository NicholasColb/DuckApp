app.directive('info', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: "js/directives/info.html"
  }; 
});