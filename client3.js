
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
    msg.latitude = position.coords.latitude;
    
    

    msg.longitude = position.coords.longitude;
    

}



function sendLocation() {
    client.send('hallo');
    console.log('ok');
    
    
    if (client.readyState === client.OPEN) {
        getLocation();

        //client.send(JSON.stringify(msg));
        client.send(msg.latitude);
        client.send(msg.longitude);
    
        
    }
    
    

}

function getLocation() {
        if (geolocation) {
            geolocation.getCurrentPosition(sendPosition);
            
        } 
}


//setTimeout(function(){ alert("Hello"); }, 1000);
setInterval(sendLocation, 2000);


