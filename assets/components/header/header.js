app.directive("headerCmpt", ["$rootScope", "$timeout", "$location", "CONFIG", 
  function($rootScope, $timeout, $location, CONFIG) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        address: '@',
        pages: '='
      },
      templateUrl: "assets/components/header/header.html",
      link: function(scope, elem, attr, ctrl) {
        scope.CONFIG = CONFIG;
        $timeout(function() {
          $('nav#dropdown').meanmenu();
        }, 0);

        scope.openModal = function(id) {
          // console.log('modal', id);
          $(id).modal('show');
        }

        $(elem).delegate('#btn_book_mobile', 'click touchstart', function(e) {
          e.preventDefault();
          // console.log('btn_book_mobile');
          $('#myModal').modal('show');
          $('.meanmenu-reveal').click();
        });
      }
    }
  }
]);