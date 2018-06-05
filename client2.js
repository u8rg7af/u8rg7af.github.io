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

var client = new W3CWebSocket('ws://80.122.77.19:5003/', 'echo-protocol');
 
client.onerror = function() {
    console.log('Connection Error');
};
 
client.onopen = function() {
    console.log('WebSocket Client Connected');
    
    
    function sendPosition(position) {
        msg.latitude = position.coords.latitude;
        client.send(msg.latitude);
        
 
        msg.longitude = position.coords.longitude;
        client.send(msg.longitude);

        //myLocation = {lat: latitude, lng: longitude};
        //marker = {lat: latitude, lng: longitude};

        //sock.send(JSON.stringify(msg));
    }
    
    
    
    function sendLocation() {
        if (client.readyState === client.OPEN) {
            getLocation();
            client.send(JSON.stringify(msg));

            setTimeout(sendLocation, 2000);
        }
    }
    sendLocation();

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(sendPosition);
            
        } 
    }

};
 
client.onclose = function() {
    console.log('Connection closed');
};
 
client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
};
