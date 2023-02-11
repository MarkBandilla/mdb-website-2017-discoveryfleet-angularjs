app.directive("footerCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: "assets/components/footer/footer.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);