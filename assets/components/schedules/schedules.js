app.directive("schedulesCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
      	location: '@'
      },
      templateUrl: "assets/components/schedules/schedules.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);