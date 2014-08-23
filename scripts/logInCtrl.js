


// app.controller("logInCtrl", function($scope, $firebase, $firebaseSimpleLogin) {
//   var ref = new Firebase("https://callcenter.firebaseio.com");
//   var authClient = $firebaseSimpleLogin(ref);
//   // log user in using the Facebook provider for Simple Login
//   $scope.loginWithFacebook = function() {
//       authClient.$login("facebook").then(function(user) {
//       console.log("Logged in as: " + user.uid);
//     }, function(error) {
//       console.error("Login failed: " + error);
//     });
//   }
// });

// auth.createUser(email, password, function(error, user) {
//   if (error === null) {
//     console.log("User created successfully:", user);
//   } else {
//     console.log("Error creating user:", error);
//   }
// });

// auth.login('password', {
//   email: '<email@domain.com>',
//   password: '<password>'
// });