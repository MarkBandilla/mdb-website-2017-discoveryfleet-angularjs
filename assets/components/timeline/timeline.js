app.directive("timelineCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        items: '=',
      },
      templateUrl: "assets/components/timeline/timeline.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);