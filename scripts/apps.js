var callCenter = angular.module('callCenter', ["ui.router", "firebase"])
    callCenter.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/products")
      
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
              .state('home', {
            url: "/home",
            templateUrl: "html/products.html"
        })

        .state('route3', {
            url: "/route3",
            templateUrl: "html/route3.html"
        })
         .state('login', {
            url: "/login",
            templateUrl: "html/loginpage.html"
        })
         .state('leads', {
            url: "/leads",
            templateUrl: "html/leads.html"
        })
         //  .state('products', {
         //    url: "/products",
         //    templateUrl: "html/products.html"
         // })
        //   .state('route2.list', {
        //       url: "/list",
        //       templateUrl: "route2.list.html",
        //       controller: function($scope){
        //         $scope.things = ["A", "Set", "Of", "Things"];
        //       }
        //   })
    })

callCenter.controller("SampleCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://callcenter.firebaseio.com/Company/Leads");
  var sync = $firebase(ref);
  leads = sync.$asArray();

  $scope.addMessage = function(Lead, name, phone, email, location, notes) {
    leads.$add({Lead: Lead}, {name: name}, {phone: phone}, {email:email}, {location: location}, {notes: notes});
    
  }
});



// var dataBase = angular.module("dataBase", ["firebase"]);
//   dataBase.controller('dataBase' ['$firebase', '$scope', function($firebase) {
    
//      var ref = new Firebase('https://callcenter.firebaseio.com/Company/Leads');
//      var sync = $firebase(ref);
//      var client = sync.$asArray();

//      client.add({name: ''}, {phone: ''})

//       // $firebase.name = '';
//       // $firebase.phone = '+';
//       // $firebase.location = '';
//       // $firebase.notes = '';


//   }]) 
