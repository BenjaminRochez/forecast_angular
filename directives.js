//DIRECTIVES

weatherApp.directive('weatherReport', function(){
  return{
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      // = for two way binding
      weatherDay: "=",
      // & for a function
      convertToStandard: "&",
      convertToDate: "&",
      // @ for one way binding -> string
      dateFormat: "@"
    }
  }
});
