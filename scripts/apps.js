var callCenter = angular.module('callCenter', ["ui.router"])
    callCenter.config(function($stateProvider, $urlRouterProvider){
      
      
      $urlRouterProvider.otherwise("html/index.html")
      
      $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "html/route1.html"
         })
          .state('route1.route2', {
              url: "/route2",
              templateUrl: "html/route1.step2.html",
               
          })
          .state('route1.route2.router3', {
              url: "/router3",
              templateUrl: "html/route1.step2.step3.html",
              
          })
            .state('blank', {
              url: "/",
              templateUrl: "html/blank.html"
          })
          
        .state('route2', {
            url: "/route2",
            templateUrl: "html/route2.html"
        })
        .state('route2.step1', {
            url: "/route2/cheese",
            templateUrl: "html/route2.step1.html"
        })
             .state('route2.step2', {
            url: "/route2/hi",
            templateUrl: "html/route2.step2.html"
        })


        .state('route3', {
            url: "/route3",
            templateUrl: "html/route3.html"
        })
        //   .state('route2.list', {
        //       url: "/list",
        //       templateUrl: "route2.list.html",
        //       controller: function($scope){
        //         $scope.things = ["A", "Set", "Of", "Things"];
        //       }
        //   })
    })