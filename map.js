// var mymap = L.map('mapid').setView([47.583807, 12.1736679], 9);      //location of fh kufstein
var mymap = L.map('mapid').setView([47.583807, 11.9], 9);         //location of innsbruck (for testing)

var LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [38, 40],
       iconAnchor:   [22, 94],
       popupAnchor:  [-3, -76]
    }
});
var openIcon = new LeafIcon({
    iconUrl: 'cup.png',
})

var doneIcon = new LeafIcon({
    iconUrl: 'heart.png',
})


L.tileLayer('https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg' , {
}).addTo( mymap );

var destMarker = [
    [47.583857, 12.173269],
    [47.583857, 12.173679],
    [47.583707, 12.173279],
    [47.583707, 12.173679]];                   //destination Markers
var marker = L.marker(destMarker[0], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker2 = L.marker(destMarker[1], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker3 = L.marker(destMarker[2], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker4 = L.marker(destMarker[3], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var locationMarker;
mymap.removeControl(mymap.zoomControl);

if (!navigator.geolocation){
    alert("Geolocation is not supported by your browser");
  }else{
    function success(position) {
        console.log(position.coords.latitude);
        var newPosition = L.latLng(position.coords.latitude,position.coords.longitude);
        if(locationMarker === undefined){
            locationMarker = new L.marker(newPosition).addTo(mymap);
            console.log(locationMarker.getLatLng());
            console.log((locationMarker.getLatLng().distanceTo(marker.getLatLng())));
        }else{
            locationMarker.setLatLng(newPosition);
        }
    }
    
    function error() {
        // alert("Sorry, no position available.");
        console.log("watchPosition: error");
    }
    
    var geo_options = {
        enableHighAccuracy: false, 
        maximumAge        : 6000, 
        timeout           : 5000
    };
    
    navigator.geolocation.watchPosition(success, error, geo_options);
  }
