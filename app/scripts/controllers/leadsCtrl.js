var app = angular.module('callCenter');

app.controller('leadsCtrl', function ($scope, leadsRef, $http) {
    
    $scope.leads = leadsRef.$asArray();

  $scope.addLead = function(lead) {
    $scope.leads.$add(lead);
  };

  $scope.gridOptions = {
      data: 'leads',
      height: '110px',
      sortInfo: { fields: ['Name', 'Phone', 'Location', 'notes'], directions: ['asc'] },
      columnDefs: [
          { field: 'name', displayName: 'Name', width: '150px' },
          { field: 'phone', displayName: 'Phone', width: '110px' },
          { field: 'email', displayName: 'Email', width: '200px' },
          { field: 'location', displayName: 'Location', width: '300px' },
          { field: 'notes', displayName: 'Notes', width: '375px' }
      ]
  };

  var connection = null;

  var twilioStuff = function (token) {
      
      Twilio.Device.setup(token);

      Twilio.Device.incoming(function (conn) {
          if (confirm('Accept incoming call from ' + conn.parameters.From + '?')) {
              $scope.fromNumber = conn.parameters.From;
              for (var i = 0; i < $scope.leads.length; i++) {
                  if ($scope.leads[i].phone === $scope.fromNumber) {
                      $scope.$apply(function () {
                          $scope.personCalling = $scope.leads[i];
                      });
                  } else {
                      console.log('That number is not found');
                  }
              }
              connection = conn;
              conn.accept();
          } else {
              connection = conn;
              conn.ignore();
          }
      });

      // Register an event handler for when a call ends for any reason
      Twilio.Device.disconnect(function (connection) {
          // $('#hangup').click(function() {
          Twilio.Device.disconnectAll();
          // })
      });

  };
  var getToken = function () {
      return $http({ method: 'get', url: '/getToken' }).then(function (data) {
          twilioStuff(data.data);
      }, function (data) {
          console.log('there was an error');
      });
  };
    getToken();

  $("#call").click(function() {  
    params = { "tocall" : $('#tocall').val()};
    connection =  Twilio.Device.connect({
        CallerId:'+18012279533', // Replace this value with a verified Twilio number:https://www.twilio.com/user/account/phone-numbers/verified
        PhoneNumber:$('.form-control').val() //pass in the value of the text field
      });
  });

  $.each(['0','1','2','3','4','5','6','7','8','9','star','pound'], function(index, value) { 
    $('#button' + value).click(function(){ 
      if(connection) {
          if (value == 'star')
              connection.sendDigits('*');
        else if (value == 'pound')
            connection.sendDigits('#');
        else
            connection.sendDigits(value);
        return false;
      } else {
          $('#toCall').val($('#toCall').val() + value);
      } 
    });
  });
});
