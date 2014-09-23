var callCenter = angular.module('callCenter');
      
callCenter.controller("loginCtrl", ["$scope", "simpleLogin", '$state', function($scope, simpleLogin, $state) {
    $scope.auth = simpleLogin;

    $scope.getLeads = function () {
        $state.go('LoggedinPage', { userId: $scope.auth.user.id });
    };
}]);