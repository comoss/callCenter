var callCenter = angular.module('callCenter', ["ui.router", "firebase", "ngGrid"])
    
    callCenter.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/home")
      
      $stateProvider
      .state("home", {
          url: "/home",
          templateUrl: "app/views/home.html",
          controller: 'LoginCtrl'
        })
         .state('p', {
            url: "/leads/:userId",
            templateUrl: "app/views/leads.html",
            controller: 'LeadsCtrl',
            resolve: {
              leadsRef: function(firebaseService){
                return firebaseService.getLeads($stateParams.userId);
                }
             }
            })
      
            
  });
 