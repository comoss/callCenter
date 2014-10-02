var callCenter = angular.module('callCenter');

callCenter.service('firebaseService', function(environmentService, $firebase) {

    var firebaseUrl = environmentService.getEnv().firebase;

    return {
        getLeads: function(userId) {
            return $firebase(new Firebase(firebaseUrl + '/users/' + userId + '/leads'));
        }

    };
});