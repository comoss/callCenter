var callCenter = angular.module('callCenter');

callCenter.directive('phoneBar', function() {
    return {
        restrict: 'AE',
        templateUrl: 'app/views/phone.html',
        controller: 'loginCtrl'
    };
});