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
    });

callCenter.controller("LeadsCtrl", function($scope, $firebase, $http) {
  var ref = new Firebase("https://callcenter.firebaseio.com/Company/Leads");
  var sync = $firebase(ref);
  $scope.leads = sync.$asArray();

  $scope.addLead = function(lead) {
    $scope.leads.$add(lead);
    
  };

  $http({
    method: 'get',
    url: '/getToken'
  }).then(function(data){
    twilioStuff(data.data);
  }, function(data){
    console.log('there was an error');
  })

  var twilioStuff = function(token){
        Twilio.Device.setup(token);
        // Register an event handler to be called when there is an incoming
        // call:

        var connection=null;

        Twilio.Device.incoming(function (conn) {
          if (confirm('Accept incoming call from ' + conn.parameters.From + '?')){
            $scope.fromNumber = conn.parameters.From;
            for(var i = 0; i < $scope.leads.length; i++){
              if($scope.leads[i].phone === $scope.fromNumber){
                console.log('Full Data is ', $scope.leads[i]);
              } else {
                console.log('That number is not found');
              }
            }
            connection = conn;
            conn.accept();
          } else{
            connection=conn;
            conn.ignore();
          }
        });

        // Register an event handler for when a call ends for any reason
        Twilio.Device.disconnect(function(connection) {
          $('#hangup').click(function() {
            Twilio.Device.disconnectAll();   
          })
        });

        $("#call").click(function() {  
          params = { "tocall" : $('#tocall').val()};
          connection =  Twilio.Device.connect({
            CallerId:'+18012279533', // Replace this value with a verified Twilio number:
                                  // https://www.twilio.com/user/account/phone-numbers/verified
            PhoneNumber:$('.form-control').val() //pass in the value of the text field
          });
        });

        $.each(['0','1','2','3','4','5','6','7','8','9','star','pound'], function(index, value) { 
          $('#button' + value).click(function(){ 
            if(connection) {
                if (value=='star')
                    connection.sendDigits('*')
                else if (value=='pound')
                    connection.sendDigits('#')
                else
                    connection.sendDigits(value)
                return false;
            } else {
             $('.form-control').val($('.form-control').val() + value)
            } 
            });
        });
  }




        // Set up the Twilio "Device" (think of it as the browser's phone) with
        // our server-generated capability token, which will be inserted by the
        // EJS template system











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
