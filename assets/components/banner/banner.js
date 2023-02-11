app.directive("bannerCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
      	title: '@',
      	subTitle: '@',
      	bgImage: '@',
        center: '@'
      },
      templateUrl: "assets/components/banner/banner.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);