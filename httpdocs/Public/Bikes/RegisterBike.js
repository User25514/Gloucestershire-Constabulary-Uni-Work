$(document).on("change", "#fileBikeImage", function(event) {
    previewFile();
});

function previewFile() {
    var preview = document.getElementById("bannerImg");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        preview.src = reader.result;
    }
    if (file) {
        console.log(file);
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
$('#formRegisterBike').submit(function(event) {
    //Get Map Coordinates
    let eventLat = marker.getPosition().lat();
    let eventLng = marker.getPosition().lng();
    //if date is empty, dont register lat lng coordinates from google maps as this means its not stolen
    var dateEvent = document.getElementById("dateEvent".value);
    if (dateEvent == null) {
        dateEvent = null;
        eventLat = null;
        eventLng = null;
    } else if (dateEvent != "") {
        // check if date is within range
        if (GetMaxMinDays("dateEvent","dateEventError") == true) {
            document.getElementById("dateEventError").innerHTML = "";
        } else {
            return false;
        } 
    } else {        
        document.getElementById("dateEventError").innerHTML = "Error with date";
        return false;
    }
    //serialize form data for POST request
    formData = $('#formRegisterBike').serializeArray();
    //get Bike Image
    const file = document.getElementById("bannerImg");
    //Translate Bike Image to Base64
    fetch(file.src).then((res) => res.blob()).then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            // Base64 Data stored in session storage
            const base64 = reader.result;
            sessionStorage.setItem('base64', base64);
        };
        reader.readAsDataURL(blob);
    });
    //Translate Base64 into Binary for easy transport
    var Binary = "";
    var input = sessionStorage.getItem('base64');
    for (var i = 0; i < input.length; i++) {
        Binary += input[i].charCodeAt(0).toString(2) + " ";
    }
    // Collect non form data.
    var ExtraData = [
        { 'name': 'dateEvent', 'value': dateEvent },
        { 'name': 'eventLat', 'value': eventLat },
        { 'name': 'eventLng', 'value': eventLng },
        { 'name': 'phpFunction', 'value': 'Register' },
        { 'name': 'uID', 'value': sessionStorage.getItem('uID') },
        { 'name': 'Binary', 'value': Binary },
    ];
    //serialize all data.
    var Data = "";
    for (x in formData.concat(ExtraData)) {
        //console.log(formData.concat(ExtraData)[x]);
        Data += formData.concat(ExtraData)[x].name + "=" + formData.concat(ExtraData)[x].value + "&";
    }
    event.preventDefault();
    // ajax POST to BikeModification.php
    $.ajax({
        type: "POST",
        url: "BikeModification.php",
        data: (Data.slice(0, -1)).replace(" ", "%20"),
        datatype: 'json',
        success: function(msg) {
            //clean data
            dataJson = JSON.parse(msg.replace('Connecting', ''));
            //sort data to corresponding error or success message.
            if (dataJson["result"] == "MPN already exists") {
                document.getElementById("txtMPNError").innerHTML = dataJson["result"];
            } else if (dataJson["result"] == "Error with a variable on the form") {
                document.getElementById("txtMPNError").innerHTML = dataJson["result"];
            } else if (dataJson["result"] == "Registered") {
                closeForm();
                //reset form and image for next register
                document.getElementById("formRegisterBike").reset();
                document.getElementById("bannerImg").src = "";
                LookupBikes();
            } else {
                console.log("Error with BikeModification.php");
            }
        },
        error: function(msg) {
            LookupBikes();
            return false;
        }
    });
});
//Map Center is a location in Cheltenham
var mapCenter = new google.maps.LatLng(51.8979988098144, -2.0838599205017);
//Geocoder will be used to convert geographic coordinates (current marker position)
// into human readable address
var geocoder = new google.maps.Geocoder();
//an infowindw displays content (usually text or images)
//in a pop-up window above the map, at a given location

function initialize() {
    //Initial map properties
    var mapOptions = {
        zoom: 15,
        center: mapCenter
    };
    //create a map object passing the html div placeholder to hold google map
    myMap = new google.maps.Map(document.getElementById("mapInput"), mapOptions);
    //Create a draggable marker
    marker = new google.maps.Marker({
        map: myMap,
        position: mapCenter,
        draggable: true
    });
}

//the addDOMLsitner will be triggered when the HTML page is loaded 
//and will execute the initialize function above
google.maps.event.addDomListener(window, 'load', initialize);

//Event handler for HTML form submit
//It will save the location and date to local storage