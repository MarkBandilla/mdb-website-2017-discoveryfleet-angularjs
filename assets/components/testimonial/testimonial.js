app.directive("testimonialCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: "assets/components/testimonial/testimonial.html",
      link: function(scope, elem, attr, ctrl) {
        $timeout(function() {
          $(".testimonial-area").owlCarousel({
          autoPlay: false, 
          slideSpeed:2000,
          pagination:false,
          navigation:true,    
            items : 1,
          /* transitionStyle : "fade", */    /* [This code for animation ] */
          navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,1],
          itemsDesktopSmall : [980,1],
          itemsTablet: [768,1],
          itemsMobile : [479,1],
        });
        },0);
      }
    }
  }
]);