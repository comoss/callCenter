var callCenter = angular.module('callCenter');

 callCenter.controller("LoginCtrl", ["$scope", "simpleLogin", function($scope, simpleLogin) {
        $scope.auth = simpleLogin;

      }])