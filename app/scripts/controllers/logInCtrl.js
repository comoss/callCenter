var callCenter = angular.module('callCenter');

 callCenter.controller("LoginCtrl", ["$scope", "simpleLogin", "$state", function($scope, simpleLogin, $state) {
        $scope.auth = simpleLogin;

        $scope.getLeads = function() {
          $state.go('p', {userId : $scope.auth.user.id});
        }

      }])