var app = angular.module("callCenter", ["firebase"]);

   

// a factory to create a re-usable profile object
// we pass in a username and get back their synchronized data
app.factory("Profile", ["$firebase", function($firebase) {
  return function(company) {
    // create a reference to the user's profile
    var ref = new Firebase("https://callcenter.firebaseio.com/company/leads/").child(company);

    // return it as a synchronized object
    return $firebase(ref).$asObject();
  }
}]);

app.controller("ProfileCtrl", ["$scope", '$firebase', "Profile",
  function($scope, $firebase, Profile) {

   


    $scope.lead = 'asldjkf'
   // var lead = $scope.profile
    // put our profile in the scope for use in DOM
    $scope.profile = Profile($scope.lead);

    

    // var mainRef = new Firebase('https://callcenter.firebaseio.com/company/leads/');
    // var thing = $firebase(mainRef).$asObject();
    // thing.$loaded().then(function(data){
    //   $scope.data = data;
    // })


  }
]);

