var callCenter = angular.module('callCenter', ["ui.router", "firebase", "ngGrid"])
    callCenter.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/home")
      debugger;
      $stateProvider
      .state("home", {
          url: "/home",
          templateUrl: "app/views/home.html",
          controller: 'LoginCtrl'
        })
        .state('secure', {
          abstract: true,
          templateUrl: '<div ui-show></div>',
          // controller: 'authController',
        //   resolve: {
        //    currentUser: function(simpleLogin) {
        //        return simpleLogin.$getCurrentUser();
        //   }
        // }
        })
        // .state('script', {
        //     url: "/script",
        //     templateUrl: "html/products.html"
        // })
         .state('secure.leads', {
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
 