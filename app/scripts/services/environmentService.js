var app = angular.module('callCenter');
  
app.service('environmentService', function ($window) {
  return {
      getEnv: function () {
          return $window.env;
      }
  };
});