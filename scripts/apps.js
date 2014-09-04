var callCenter = angular.module('callCenter', ["ui.router", "firebase", "ngGrid"])
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

callCenter.controller("LeadsCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://callcenter.firebaseio.com/Company/Leads");
  var sync = $firebase(ref);
  $scope.leads = sync.$asArray();

  $scope.addLead = function(lead) {
    $scope.leads.$add(lead);
    
  }
});

callCenter.controller('gridCtrl', function($scope) {
    $scope.gridOptions = { data: 'leads',
      height: '110px',
      sortInfo: {fields: ['Name', 'Phone', 'Location', 'notes'], directions: ['asc']},
      columnDefs: [
        {field: 'name', displayName: 'Name', width: '150px'},
        {field: 'phone', displayName: 'Phone', width: '110px'},
        {field: 'email', displayName: 'Email', width: '200px'},
        {field: 'location', displayName: 'Location', width:'300px'},
        {field: 'notes', displayName: 'Notes', width:'375px'},
      ]

};

});


// [{name: "Moroni", age: 50},
//                      {name: "Tiancum", age: 43},  
//                      {name: "Jacob", age: 27},
//                      {name: "Nephi", age: 29},
//                      {name: "Enos", age: 34}];
