 var app = angular.module("callCenter");
 
 app.factory("simpleLogin", ["$firebaseSimpleLogin", function($firebaseSimpleLogin) {
        var ref = new Firebase("https://callcenter.firebaseio.com/");
        return $firebaseSimpleLogin(ref);
      }]);
