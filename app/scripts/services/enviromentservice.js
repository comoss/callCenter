var app = angular.module("callCenter"); 

  app.service("enviromentService", function($window){
    return {
      getEnv: function() {
        return $window.env;
      }
    }

  })



