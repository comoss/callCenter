// var app = angular.module("callCenter", ["ui.router","firebase"]);

// app.controller("CenterCtrl", function($scope, $firebase) {
//   var ref = new Firebase("https://callcenter.firebaseio.com/data");
//   var sync = $firebase(ref);

//   // download the data into a local object
//   var syncObject = sync.$asObject();

//   // synchronize the object with a three-way data binding
//   // click on `index.html` above to see it used in the DOM!
//   syncObject.$bindTo($scope, "data");
// });       
//        