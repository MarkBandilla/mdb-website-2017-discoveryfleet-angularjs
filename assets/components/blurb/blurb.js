app.directive("blurbCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        title: '@',
        image: '@',
        context: '@',
        link: '@'
      },
      templateUrl: "assets/components/blurb/blurb.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);