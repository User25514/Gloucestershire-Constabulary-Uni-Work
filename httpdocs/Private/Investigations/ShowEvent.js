var mapCenter = new google.maps.LatLng(51.8979988098144, -2.0838599205017);
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();
var myMap;

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: mapCenter
    };
    myMap = new google.maps.Map(document.getElementById("mapInput"), mapOptions);
    var ev = JSON.parse(window.localStorage.getItem("Event"));
    var eventDate = ev.eventDate;
    var eventLat = ev.eventLat;
    var eventLng = ev.eventLng;
    var markerLatLng = new google.maps.LatLng(eventLat, eventLng);

    marker = new google.maps.Marker({
        map: myMap,
        position: markerLatLng
    });
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent(eventDate);
    infowindow.open(myMap, marker);

}
google.maps.event.addDomListener(window, "load", initialize);