var mapCenter = new google.maps.LatLng(51.8979988098144, -2.0838599205017);
var geocoder = new google.maps.Geocoder();

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: mapCenter
    };
    myMap = new google.maps.Map(document.getElementById("mapInput"), mapOptions);
    marker = new google.maps.Marker({
        map: myMap,
        position: mapCenter,
        draggable: true
    });
}
google.maps.event.addDomListener(window, "load", initialize);


$("#formInsertEvent").submit(function() {
    var eventDate = $("#dateEvent").val();
    var eventlat = marker.getPosition().lat();
    var eventLng = marker.getPosition().lng();
    var data = {
        "eventDate": eventDate,
        "eventLat": eventlat,
        "eventLng": eventLng
    }
    console.log(data);
    window.localStorage.setItem("Event", JSON.stringify(data));
    alert("Event has addedd successfully")
})