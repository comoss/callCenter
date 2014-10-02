var callCenter = angular.module('callCenter');

callCenter.service('firebaseScriptService', function(environmentService, $firebase) {

    var firebaseUrl = environmentService.getEnv().firebase;

    return {
        getScript: function(userId){
          return $firebase(new Firebase(firebaseUrl + '/users/' + userId + '/script'));
        }
    }
});