var app = angular.module("callCenter", ["firebase"]);

   

// a factory to create a re-usable profile object
// we pass in a username and get back their synchronized data
app.factory("Profile", ["$firebase", function($firebase) {
  return function(company) {
    // create a reference to the user's profile
    var ref = new Firebase("https://callcenter.firebaseio.com/<client name>/").child(company);

    // return it as a synchronized object
    return $firebase(ref).$asObject();
  }
}]);

app.controller("ProfileCtrl", ["$scope", "Profile",
  function($scope, Profile) {
    // put our profile in the scope for use in DOM
    $scope.profile = Profile('company contact');
  }
]);