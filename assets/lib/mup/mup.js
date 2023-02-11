var mup = angular.module('$mup', []);
mup.factory('$mupdb', ['$rootScope', function($rootScope) {
  var mdb = {};
  mdb.pages = Pages;
  
  mdb.getTemplate = function(page, method, id) {
    var found = false;

    for(var p in mdb.pages) {
      if(mdb.pages[p].url === page) {
        if(!method) {
          found = true;
          return mdb.pages[p].template;
        } else {
          link = page + '/' + method;
          for(var s in mdb.pages[p].sub) {
            if(mdb.pages[p].sub[s].url === link) {
              found = true;
              return mdb.pages[p].sub[s].template;
            }
          }
        }
      }
    }

    if(!found) return '<h1>404: Page not found!</h1>';
  }
  mdb.getController = function(page, method, id) {
    var ctrl = null;

    for(var p in mdb.pages) {
      if(mdb.pages[p].url === page) {
        if(!method) {
          found = true;
          return mdb.pages[p].controller;
        } else {
          link = page + '/' + method;
          for(var s in mdb.pages[p].sub) {
            if(mdb.pages[p].sub[s].url === link) {
              found = true;
              return mdb.pages[p].sub[s].controller;
            }
          }
        }
      }
    }

    return ctrl;
  }
  return mdb;          
}]);