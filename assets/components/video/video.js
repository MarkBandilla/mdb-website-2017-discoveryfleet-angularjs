app.directive("videoCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
      	title: '@',
      	subTitle: '@',
        btnText: '@',
        btnLink: '@',
        image: '@'
      },
      templateUrl: "assets/components/video/video.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);