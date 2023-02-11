var app = angular.module('myApp', ['ui.router', '$mup', 'ngSanitize']);

app.constant('CONFIG', {
  'APP_NAME' : 'DiscoveryFleet',
  'APP_VERSION' : '0.0.0',
  'SYSTEM_LANGUAGE' : 'en',
  'BASE_URL' : '#/'
});

app.controller('appCtrl', ['$rootScope', '$scope', '$state', 'CONFIG', '$mupdb', function($rootScope, $scope, $state, CONFIG, $mupdb) {
  $scope.CONFIG = CONFIG;
  $scope.pages = $mupdb.pages;
  
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
      // console.log($state.params, $state.controller);
  })
}]);

app.config(['$urlRouterProvider', '$stateProvider', '$mupdbProvider', function($urlRouterProvider, $stateProvider, $mupdbProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('page', {
      url: '/:page/:method/:id', 
      params: { 
        method: {value: null, squash: true}, 
        id: {value: null, squash: true} 
      },
      template: function($stateParams) {
        return $mupdbProvider.$get().getTemplate($stateParams.page, $stateParams.method, $stateParams.id);
      },
      controllerProvider: function($stateParams) {
        return $mupdbProvider.$get().getController($stateParams.page, $stateParams.method, $stateParams.id);
      }
    })
}]);


$('body').delegate('form', 'submit', function(e){
  e.preventDefault();

  var url = "php/inquiry.php";
  var data = $(this).serialize();
  var button = $('button[type="submit"]');

  button.attr('disabled', true);

  $.ajax({
    url: url,
    type: 'POST',
    data: data,
    success: function(data) {
      console.log(data);
      button.attr('disabled', false);

      if(data === 'success') {
        toastr.success('Your request has been sent', 'Success!');
        $('#myModal').modal('hide');
      } else {
        console.log(data);
        toastr.error('Something went wrong.. try to refresh and try again', 'Failed');
      }
    },
    error: function(error) {
      console.log(data);      
    }
  });
});