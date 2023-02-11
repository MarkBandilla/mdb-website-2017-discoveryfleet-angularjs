app.directive("infoCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        banner: '@',
      	title: '@',
      	context: '@'
      },
      templateUrl: "assets/components/info/info.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);