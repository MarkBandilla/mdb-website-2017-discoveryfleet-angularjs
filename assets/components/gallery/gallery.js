app.directive("galleryCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        title: '@',
        images: '='
      },
      templateUrl: "assets/components/gallery/gallery.html",
      link: function(scope, elem, attr, ctrl) {
        $timeout(function() {
          $(elem).find(".total-gallery-area").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            pagination:false,
            navigation:true,    
              items : 4,
            /* transitionStyle : "fade", */    /* [This code for animation ] */
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
              itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,2],
            itemsMobile : [479,1],
          });          
        }, 0);
      }
    }
  }
]);