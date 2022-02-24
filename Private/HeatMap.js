function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 51.89779988098144, lng: -2.0838599205017 }
    });
    var lat, lng, locObj, gLocations = [];
    var locObj1 = { "Lat": '51.89797232832006', "Lng": '-2.0842461585998535' };
    var locObj2 = { "Lat": '51.89776047580352', "Lng": '-2.0848469734191895' };
    var locObj3 = { "Lat": '51.887616867833856', "Lng": '-2.0904688835144043' };
    var locObj4 = { "Lat": '51.887351991000344', "Lng": '-2.0906834602355957' };
    var locObj5 = { "Lat": '51.887351991000344', "Lng": '-2.08982515335083' };
    var locObj6 = { "Lat": '51.88695467282321', "Lng": '-2.0903401374816895' };
    var locObj7 = { "Lat": '51.88695467282321', "Lng": '-2.0897393226623535' };
    var locObj8 = { "Lat": '51.886981160810954', "Lng": '-2.0889668464660645' };
    var locObj9 = { "Lat": '51.885577275950034', "Lng": '-2.089782238006592' };
    var locations = [locObj1, locObj2, locObj3, locObj4, locObj5, locObj6, locObj7, locObj8, locObj9];
    for (i = 0; i < 9; i++) {
        lat = locations[i].Lat;
        lng = locations[i].Lng;
        locObj = new google.maps.LatLng(lat, lng);
        gLocations.push(locObj);
    };
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: gLocations,
        map: map
    });

}