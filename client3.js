
var ping = 0;
var latitude = 0;
var longitude = 0;
var geolocation = require('geolocation')
var navigator = require('navigator');
var W3CWebSocket = require('websocket').w3cwebsocket;

var msg = {
    latitude: "0",
    longitude: "0",
    type: "message",
    text: "Walder Helmut", 
    id:   "55",
    date: Date.now()
};

//var client = new WebSocket("ws://80.122.77.19:5003");
var client = new W3CWebSocket('ws://80.122.77.19:5003/', 'echo-protocol');
 
client.onerror = function() {
    console.log('Connection Error');
};
 
client.onopen = function() {
    console.log('WebSocket Client Connected');
   
    
}
  
client.onclose = function() {
    console.log('Connection closed');
    
};
 
client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
};

function sendPosition(position) {
    console.log(position);
    msg.latitude = position.coords.latitude;
    
    

    msg.longitude = position.coords.longitude;
    

}



function sendLocation() {
    if (client.readyState === client.CLOSED) {
        console.log('connection closed!!');
        //client = new WebSocket("ws://80.122.77.19:5003");
        client = new W3CWebSocket('ws://80.122.77.19:5003/', 'echo-protocol');
    }


    
    
    
    if (client.readyState === client.OPEN) {
        ping ++;
        client.send(ping.toString());

        getLocation();

        //client.send(JSON.stringify(msg));
        client.send(msg.latitude);
        client.send(msg.longitude);
        client.send(msg.id)
        client.send('hallo');
        //client.send(msg.date);

        console.log('ok');
        console.log(client.readyState);
    
        
    }
    
    

}

function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(sendPosition);
            
        } 
}

geolocation.getCurrentPosition(function (err, position) {
    if (err) throw err
    console.log(position)
  })

//setTimeout(function(){ alert("Hello"); }, 1000);
setInterval(sendLocation, 2000);

