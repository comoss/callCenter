var callCenter = angular.module('callCenter');

callCenter.controller('scriptCtrl', function ($scope, scriptRef) {
    
    $scope.sales = scriptRef.$asArray();

  $scope.addDialog = function(words) {
    $scope.sales.$add(words);
  };

});


  //   $scope.leads = leadsRef.$asArray();

  // $scope.addLead = function(lead) {
  //   $scope.leads.$add(lead);
  // };
