var app = angular.module("callCenter");

  app.service("firebaseService", function(enviromentService, $firebase){
    var firebaseUrl = enviromentService.getEnv().firebase;

    return {
      getLeads: function(userId){
        return $firebase(new Firebase(firebaseUrl + "/users/" + userId + "/leads")); 
      }
    }
  

  });

