// var app = angular.module("callCenter", ["ui.router", "firebase"]);







// var dataBase = angular.module("callcenter", ["firebase"]);
//   dataBase.controller('dataBase' ['$firebase', '$scope', function($firebase) {
    
//      var ref = new Firebase('https://callcenter.firebaseio.com/Company/Leads');
//      var sync = $firebase(ref);
//      var client = sync.$asArray();

//      client.add({name: ''}, {phone: ''})

//       // $firebase.name = '';
//       // $firebase.phone = '+';
//       // $firebase.location = '';
//       // $firebase.notes = '';


//   }]) 

 


// var myDataRef = new Firebase('https://callcenter.firebaseio.com/Company/Leads');
//       $('#messageInput').keypress(function (e) {
//         if (e.keyCode == 13) {
//           var name = $('#nameInput').val();
//           var text = $('#messageInput').val();
//           var 
//           myDataRef.push({name: name, text: text});
//           $('#messageInput').val('');
//         }
//       });
      // myDataRef.on('child_added', function(snapshot) {
      //   var message = snapshot.val();
      //   displayChatMessage(message.name, message.text);
      // });
      // function displayChatMessage(name, text) {
      //   $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
      //   $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      // };