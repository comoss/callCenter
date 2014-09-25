var callCenter = angular.module('callCenter');

callCenter.directive('userNav', function() {
    return {
        restrict: 'AE',
        templateUrl: 'app/views/nav.html',
        controller: 'loginCtrl'
    };
});