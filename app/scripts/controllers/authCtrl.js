var app = angular.module('callCenter');

app.controller('authCtrl', function($scope, currentUser, $state){

  $scope.user = currentUser;

  if(!$scope.user.id){
    $state.go('home');
  }
  
});