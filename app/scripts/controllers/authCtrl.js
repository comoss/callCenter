var callCenter = angular.module('callCenter');

callCenter.controller('authCtrl', function($scope, currentUser, $state){

  $scope.user = currentUser;

  if(!$scope.user.id){
    $state.go('home');
  }

});