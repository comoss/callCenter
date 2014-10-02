var callCenter = angular.module('callCenter', ["ui.router", "firebase"]);

callCenter.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state("home", {
          url: "/home",
          templateUrl: "app/views/home.html",
          controller: 'loginCtrl'
      })
      .state('LoggedinPage', {
          url: "/leads/:userId",
          templateUrl: "app/views/leads.html",
          controller: 'leadsCtrl',
          resolve: {
              leadsRef: function(firebaseService, $stateParams) {
                  return firebaseService.getLeads($stateParams.userId);
              }
          }
      })
      .state('salesScript', {
          url: "/script/:userId",
          templateUrl: "app/views/products.html",
          controller: 'scriptCtrl',
          resolve: {
             scriptRef : function(firebaseScriptService, $stateParams) {
                  return firebaseScriptService.getScript($stateParams.userId);
              }
          }
      });
});