var app = angular.module("callCenter");

  app.controller("authController", function($scope, currentUser, $state){
    
    $scope.user = currentUser; 

      if (!$scope.auth.user){
        $state.go('home')
      }


  });

