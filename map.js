// var mymap = L.map('mapid').setView([47.583807, 12.1736679], 9);      //location of fh kufstein

var bounds = L.latLngBounds([47.35, 11.3], [47.589, 12.19])             //location with innsbruck (for testing)
mymap = L.map('mapid').fitBounds(bounds);

var LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [38, 40],
       iconAnchor:   [38, 0],
       popupAnchor:  [-5, 0]
    }
});
var toDoIcon = new LeafIcon({
    iconUrl: 'cup.png',
})

var doneIcon = new LeafIcon({
    iconUrl: 'heart.png',
})

var doneCnt = 0;
var navWatch;

L.tileLayer('https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg' , {
}).addTo( mymap );

var destCoord = [                                                                               //destination markers
    [47.583857, 12.173269],
    [47.583857, 12.173679],
    [47.583707, 12.173279],
    [47.583707, 12.173679],
    [47.264222, 11.386016],
    [47.266888, 11.393164],
    [47.250874, 11.405436]];               
var destMarker1 = L.marker(destCoord[0], {icon: toDoIcon}).bindPopup("Coffee?").addTo(mymap);
var destMarker2 = L.marker(destCoord[1], {icon: toDoIcon}).bindPopup("Coffee?").addTo(mymap);
var destMarker3 = L.marker(destCoord[2], {icon: toDoIcon}).bindPopup("Coffee?").addTo(mymap);
var destMarker4 = L.marker(destCoord[3], {icon: toDoIcon}).bindPopup("Coffee?").addTo(mymap);
var destMarker5 = L.marker(destCoord[4], {icon: toDoIcon}).bindPopup("Coffee?").addTo(mymap);
var destMarker6 = L.marker(destCoord[5], {icon: toDoIcon}).bindPopup("Coffee?").addTo(mymap);
var destMarker7 = L.marker(destCoord[6], {icon: toDoIcon}).bindPopup("Coffee?").addTo(mymap);
var destMarkers = [destMarker1, destMarker2, destMarker3, destMarker4, destMarker5, destMarker6, destMarker7];     
var currPosMarker;  

//start: delete after testing
var para = document.createElement("p");   
var newline = document.createElement("br"); 
var lineCnt = 0;
//end: delete after testing
                                                                        //current position marker
mymap.removeControl(mymap.zoomControl);

if (!navigator.geolocation){
    alert("Geolocation is not supported by your browser");
  }else{
    function success(position) {
        console.log(position.coords.latitude);

        //start: delete after testing
        /**Display the coordinates -> for bugfixing */
        if(lineCnt == 0){
            para.appendChild(document.createTextNode(position.coords.latitude + ", " + position.coords.longitude));
            document.getElementsByClassName("leaflet-control-attribution leaflet-control")[0].appendChild(para);
            document.getElementsByClassName("leaflet-control-attribution leaflet-control")[0].appendChild(newline);
            lineCnt++;
        }
        //end: delete after testing
        var currPosition = L.latLng(position.coords.latitude,position.coords.longitude);        //coordinates of the current position as latLng
        if(currPosMarker === undefined){                                                        
            currPosMarker = new L.marker(currPosition).bindPopup("You are here").addTo(mymap);                            //for the first time, create markter
        }else{
            currPosMarker.setLatLng(currPosition);                                              //update position of existing marker
        }
        for(var i = 0; i < destCoord.length; i++){
            if(currPosition.distanceTo(destCoord[i]) < 15.0){
                destMarkers[i].setIcon(doneIcon);
                destMarkers[i].bindPopup("You have already been here.")
            }else{
                if(destMarkers[i].getPopup().getContent() != "You have already been here."){
                    destMarkers[i].bindPopup("Still " + Math.round(currPosition.distanceTo(destCoord[i]) * 10)/10 + " meters");
                    doneCnt++;
                    if(doneCnt == 4){
                        quitWatch();
                    }
                }
            }
        }
        //start: delete after testing
        lineCnt = 0;
        //end: delete after testing
    }

    /* Error Handling
    for details see https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition */
    function error(e) {                                                     
        switch(e.code){
            case e.PERMISSION_DENIED:
                console.log("Error: Permission denied");
                break;
            case e.POSITION_UNAVAILABLE:
                console.log("Error: Position unavailable");
                break;
            case e.TIMEOUT:
                console.log("Error: Timeout");
                break;
        }
    }

    function quitWatch(){
        navigator.geolocation.clearWatch(navWatch);
    }
    
    var geo_options = {
        enableHighAccuracy  : true,                                            //improve performance on false
        maximumAge          : 0, 
        timeout             : 2000,												//milliseconds until new position is fetched
        distanceFilter      : 1													//in meters
    };
    
    setInterval(getPosition, 400);
    //navWatch = navigator.geolocation.watchPosition(success, error, geo_options);
    function getPosition(){
        navWatch = navigator.geolocation.getCurrentPosition(success, error, geo_options);
    }
    
  }
