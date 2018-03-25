// var mymap = L.map('mapid').setView([47.583807, 12.1736679], 9);      //location of fh kufstein

var bounds = L.latLngBounds([47.35, 11.3], [47.589, 12.19])             //location with innsbruck (for testing)
mymap = L.map('mapid').fitBounds(bounds);

var LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [38, 40],
       iconAnchor:   [22, 94],
       popupAnchor:  [-3, -76]
    }
});
var toDoIcon = new LeafIcon({
    iconUrl: 'cup.png',
})

var doneIcon = new LeafIcon({
    iconUrl: 'heart.png',
})


L.tileLayer('https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg' , {
}).addTo( mymap );

var destCoord = [                               //destination markers
    [47.583857, 12.173269],
    [47.583857, 12.173679],
    [47.583707, 12.173279],
    [47.583707, 12.173679],
    [47.360707, 11.823679]];               
var destMarker1 = L.marker(destCoord[0], {icon: toDoIcon}).bindPopup("Kaffee?").addTo(mymap);
var destMarker2 = L.marker(destCoord[1], {icon: toDoIcon}).bindPopup("Kaffee?").addTo(mymap);
var destMarker3 = L.marker(destCoord[2], {icon: toDoIcon}).bindPopup("Kaffee?").addTo(mymap);
var destMarker4 = L.marker(destCoord[3], {icon: toDoIcon}).bindPopup("Kaffee?").addTo(mymap);
var destMarker5 = L.marker(destCoord[4], {icon: toDoIcon}).bindPopup("Kaffee?").addTo(mymap);
var destMarkers = [destMarker1, destMarker2, destMarker3, destMarker4, destMarker5];     
var currPosMarker;                              //curren position marker
mymap.removeControl(mymap.zoomControl);

if (!navigator.geolocation){
    alert("Geolocation is not supported by your browser");
  }else{
    function success(position) {
        console.log(position.coords.latitude);
        var currPosition = L.latLng(position.coords.latitude,position.coords.longitude);        //coordinates of the current position as latLng
        if(currPosMarker === undefined){                                                        
            currPosMarker = new L.marker(currPosition).addTo(mymap);                            //for the first time, create markter
        }else{
            currPosMarker.setLatLng(currPosition);                                              //update position of existing marker
        }
        for(var i = 0; i < destCoord.length; i++){
            if(currPosition.distanceTo(destCoord[i]) < 40000.0){
                destMarkers[i].setIcon(doneIcon);
                destMarkers[i].bindPopup("You have already been here.")
            }else{
                if(destMarkers[i].getPopup().getContent() != "You have already been here."){
                    destMarkers[i].bindPopup("Noch " + Math.round(currPosition.distanceTo(destCoord[i]) * 10)/10 + " Meter");
                }
            }
        }
    }
    
    function error() {
        // alert("Sorry, no position available.");
        console.log("watchPosition: error");
    }
    
    var geo_options = {
        enableHighAccuracy: false, 
        maximumAge        : 0, 
        timeout           : 10000
    };
    
    navigator.geolocation.watchPosition(success, error, geo_options);
  }
