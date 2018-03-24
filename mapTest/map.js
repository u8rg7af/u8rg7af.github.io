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

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png' 
+ (L.Browser.retina ? '&scale=2': ''),{  detectRetina:true
}, {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo( mymap );
var marker = L.marker([47.583807, 12.1736679], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker2 = L.marker([47.583707, 12.173679], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker3 = L.marker([47.583707, 12.173579], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);
var marker4 = L.marker([47.583807, 12.173579], {icon: openIcon}).bindPopup("Kaffee?").addTo(mymap);

mymap.removeControl(mymap.zoomControl);
setInterval(getLocation,30000);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation wird im Browser nicht unterstützt";
    }
}

function showPosition(position) {
    // x.innerHTML = "Breitengrad: " + position.coords.latitude + 
    // "<br>Längengrad: " + position.coords.longitude;
    // L.marker([position.coords.latitude,position.coords.longitude]).bindPopup("Der Weg ist das Ziel.").addTo(mymap)
    console.log(position.coords.latitude)
}


// function onLocationFound(e) {
//     var radius = e.accuracy / 4;

//     L.marker(e.latlng).addTo(mymap)
//         .bindPopup("You are within " + radius + " meters from this point").openPopup();

//     L.circle(e.latlng, radius).addTo(mymap);
// }

// mymap.on('locationfound', onLocationFound);
// mymap.locate({setView: true, watch: true, maxZoom: 18});
// function onLocationError(e) {
//     alert(e.message);
// }

// mymap.on('locationerror', onLocationError);