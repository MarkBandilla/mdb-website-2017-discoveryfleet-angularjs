app.directive("bookingCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
      	booking: '@'
      },
      templateUrl: "assets/components/booking/booking.html",
      link: function(scope, elem, attr, ctrl) {
      }
    }
  }
]);