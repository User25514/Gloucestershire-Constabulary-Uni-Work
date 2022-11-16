var mapCenter = new google.maps.LatLng(51.8979988098144, -2.0838599205017);
var geocoder = new google.maps.Geocoder();

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: mapCenter
    };
    RegisterBikeMap = new google.maps.Map(document.getElementById("mapInput"), mapOptions);
    marker = new google.maps.Marker({
        map: RegisterBikeMap,
        position: mapCenter,
        draggable: true
    });
    StolenBikeMap = new google.maps.Map(document.getElementById("StolenmapInput"), mapOptions);
    marker2 = new google.maps.Marker({
        map: StolenBikeMap,
        position: mapCenter,
        draggable: true
    });
}
google.maps.event.addDomListener(window, "load", initialize);