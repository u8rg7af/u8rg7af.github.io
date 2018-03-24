var mymap = L.map('mapid').setView([47.583807, 12.1736679], 18);
//var map = L.map('map').setView([45.8167, 15.9833], 10);

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


L.tileLayer(https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg' , {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo( mymap );
var marker = L.marker([47.583807, 12.1736679], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker2 = L.marker([47.583707, 12.173679], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker3 = L.marker([47.583707, 12.173579], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker4 = L.marker([47.583807, 12.173579], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);

mymap.removeControl(mymap.zoomControl);

if (!navigator.geolocation){
    alert("Geolocation is not supported by your browser");
  }else{
    function success(position) {
        console.log(position.coords.latitude);
        L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap);
    }
    
    function error() {
        alert("Sorry, no position available.");
    }
    
    var geo_options = {
        enableHighAccuracy: false, 
        maximumAge        : 5000, 
        timeout           : 4000
    };
    
    navigator.geolocation.watchPosition(success, error, geo_options);
  }
