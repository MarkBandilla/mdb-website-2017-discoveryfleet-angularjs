app.directive("sliderCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: "assets/components/slider/slider.html",
      link: function(scope, elem, attr, ctrl) {
        $timeout(function() {
          $('#ensign-nivoslider').nivoSlider({
            effect: 'slideInRight',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 500,
            pauseTime: 5000,
            startSlide: 0,
            directionNav: true,
            controlNavThumbs: false,
            pauseOnHover: false,
            manualAdvance: false
          });
        },0);
      }
    }
  }
]);