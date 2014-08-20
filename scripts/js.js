
        // Set up the Twilio "Device" (think of it as the browser's phone) with
        // our server-generated capability token, which will be inserted by the
        // EJS template system:
        Twilio.Device.setup('<%= token %>');
        // Register an event handler to be called when there is an incoming
        // call:

        var connection=null;

         Twilio.Device.incoming(function (conn) {
        if (confirm('Accept incoming call from ' + conn.parameters.From + '?')){
            connection=conn;
            conn.accept();
        }else{
            connection=conn;
            conn.ignore();
        }
    });

        // Register an event handler for when a call ends for any reason
        Twilio.Device.disconnect(function(connection) {
            console.log('call disconnected')
        $('#hangup').click(function() {
            Twilio.Device.disconnectAll();
            $('p').ejs('Call Disconneted')
        });
});
             $("#call").click(function() {  
        params = { "tocall" : $('#tocall').val()};
        connection =  Twilio.Device.connect({
                 CallerId:'+18012279533', // Replace this value with a verified Twilio number:
                                          // https://www.twilio.com/user/account/phone-numbers/verified
                  PhoneNumber:$('#tocall').val() //pass in the value of the text field
         });
    });

         // function toggleCallStatus(){
         //     $('#call').toggle();
         //     $('#hangup').toggle();
         //     $('#dialpad').toggle();
         //      }

   $.each(['0','1','2','3','4','5','6','7','8','9','star','pound'], function(index, value) { 
        $('#button' + value).click(function(){ 
            if(connection) {
                if (value=='star')
                    connection.sendDigits('*')
                else if (value=='pound')
                    connection.sendDigits('#')
                else
                    connection.sendDigits(value)
                return false;
            } 
            });
    });
       