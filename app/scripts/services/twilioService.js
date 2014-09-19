var app = angular.module('callCenter');

app.service("twiloService", function($http) {

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

     return {
      getCaller: function(){
       return $http({ method: 'get', url: '/getToken' }).then(function(data){
        twilioStuff(data.data);}, function(data){
          console.log('there was an error');
        });
     }
   };
 }
});