// Require the twilio and express modules
var twilio = require('twilio'),
    express = require('express');
    Firebase = require("firebase");
// Create an express application
var app = express();


app.use(express.static('/views')) 
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/html', express.static(__dirname + '/html'));
app.use('/app', express.static(__dirname + '/app'));




// Render an HTML page which contains a capability token that
// will grant permission to accept inbound calls to the ID
// "kevin" (this could be any string)
app.get('/', function(req, res) {
 
    // Create an object which will generate a capability token
    // Replace these two arguments with your own account SID
    // and auth token:
   var capability = new twilio.Capability(
     'ACad14cf9ae6eda55b278211274df94264', '5551e9b5547e1d3fe01fec4f40b2ba61'
    );
 
    // Give the capability generator permission to accept incoming
    // calls to the ID "kevin"
    capability.allowClientIncoming('kevin');

    // Give the capability generator permission to make outbound calls,
    // Using the following TwiML app to request call handling instructions:
    capability.allowClientOutgoing('AP59fc472c368cff17be7eb9c5be831a2b');
 
    // Render an HTML page which contains our capability token
    // res.render('index.html', {
    //     token:capability.generate()
    // });

    res.sendfile(__dirname + '/views/index.html');
});

app.get('/getToken', function(req, res){
    var capability = new twilio.Capability(
     'ACad14cf9ae6eda55b278211274df94264', '5551e9b5547e1d3fe01fec4f40b2ba61'
    );
 
    // Give the capability generator permission to accept incoming
    // calls to the ID "kevin"
    capability.allowClientIncoming('kevin');

    // Give the capability generator permission to make outbound calls,
    // Using the following TwiML app to request call handling instructions:
    capability.allowClientOutgoing('AP59fc472c368cff17be7eb9c5be831a2b');

    var token = capability.generate();
    res.end(token);
})

 
app.listen(1337);
console.log('Visit http://localhost:1337/ to accept inbound calls and make outbound calls!');