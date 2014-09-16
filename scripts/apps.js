var callCenter = angular.module('callCenter', ["ui.router", "firebase", "ngGrid"])
    callCenter.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/home")
      
      $stateProvider
      .state("home", {
          url: "/home",
          templateUrl: "html/home.html",
          controller: 'SampleCtrl'
        })
        // .state('home.route1', {
        //     url: "/home/route1",
        //     templateUrl: "html/route1.html"
        //  })
        //   .state('route1.route2', {
        //       url: "/route2",
        //       templateUrl: "html/route1.step2.html",
               
        //   })
        //   .state('route1.route2.router3', {
        //       url: "/router3",
        //       templateUrl: "html/route1.step2.step3.html",
        //   })
        // .state('route2', {
        //     url: "/route2",
        //     templateUrl: "html/route2.html"
        // })
        // .state('route2.step1', {
        //     url: "/route2/step1",
        //     templateUrl: "html/route2.step1.html"
        // })
        // .state('route2.step2', {
        //     url: "/route2/step2",
        //     templateUrl: "html/route2.step2.html"
        // })
        .state('script', {
            url: "/script",
            templateUrl: "html/products.html"
        })
        // .state('route3', {
        //     url: "/route3",
        //     templateUrl: "html/route3.html"
        // })
         .state('leads', {
            url: "/leads",
            templateUrl: "html/leads.html",
            controller: 'gridCtrl',
            // controller: 'HomeCtrl',
            resolve: {
            // controller will not be loaded until $getCurrentUser resolves
            // simpleLogin refers to our $firebaseSimpleLogin wrapper in the example above
            "currentUser": ["simpleLogin", function(simpleLogin) {
              // $getCurrentUser returns a promise so the resolve waits for it to complete
              return simpleLogin.$getCurrentUser();
            }]
          }
        });
         

      callCenter.controller("HomeCtrl", ["currentUser", function(currentUser) {
        // currentUser (provided by resolve) will contain the
        // authenticated user or null if not logged in
      }]);


          });
            
      callCenter.factory("simpleLogin", ["$firebaseSimpleLogin", function($firebaseSimpleLogin) {
        var ref = new Firebase("https://callcenter.firebaseio.com/Company/Leads/User");
        return $firebaseSimpleLogin(ref);
      }]);
      // and use it in our controller
      callCenter.controller("SampleCtrl", ["$scope", "simpleLogin", function($scope, simpleLogin) {
        $scope.auth = simpleLogin;
      }])

      callCenter.controller("LeadsCtrl", function($scope, $firebase, $http, $rootScope) {
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
  
              var connection=null;

              Twilio.Device.incoming(function (conn) {
                if (confirm('Accept incoming call from ' + conn.parameters.From + '?')){
                  $scope.fromNumber = conn.parameters.From;
                  for(var i = 0; i < $scope.leads.length; i++){
                    if($scope.leads[i].phone === $scope.fromNumber){
                      $scope.$apply(function(){
                        $scope.personCalling = $scope.leads[i];
                      })
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
                // $('#hangup').click(function() {
                  Twilio.Device.disconnectAll();   
                // })
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
                   $('#toCall').val($('#toCall').val() + value)
                  } 
                  });
              });
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

 