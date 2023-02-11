app.directive("routeCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
      	route: '@'
      },
      templateUrl: "assets/components/route/route.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);