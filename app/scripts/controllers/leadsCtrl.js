var callCenter = angular.module('callCenter');

callCenter.controller('LeadsCtrl', function($scope, leadsRef){

  $scope.leads = leadsRef.$asArray();
       
        
        $scope.addLead = function(lead) {
          $scope.leads.$add(lead);
        };

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
        

});

