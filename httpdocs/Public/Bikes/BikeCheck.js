
function GetMaxMinDays(ElementID,ErrorID){
    let Maxdays = 0;
    let Mindays = 10; // Days you want to subtract
    let date = new Date();
    let Minlast = new Date(date.getTime() - (Mindays * 24 * 60 * 60 * 1000));
    let Minday = Minlast.getDate();
    let Minmonth=Minlast.getMonth()+1;
    let Minyear=Minlast.getFullYear();
    Mintoday = new Date(Minyear+'-'+Minmonth+'-'+Minday);
    let Maxlast = new Date(date.getTime() - (Maxdays * 24 * 60 * 60 * 1000));
    let Maxday =Maxlast.getDate();
    let Maxmonth=Maxlast.getMonth()+1;
    let Maxyear=Maxlast.getFullYear();
    Maxtoday = new Date(Maxyear+'-'+Maxmonth+'-'+Maxday);
    // Get dateEvemt and format it for If statement
    var dateEvent = (document.getElementById(ElementID).value);
    if (dateEvent == "") {
        document.getElementById(ErrorID).innerHTML = "Please enter a date";
        return false;
    } else{
        dateEvent = dateEvent.split("-");
        dateEvent[1] = dateEvent[1].split("");
        console.log(dateEvent);
        //if month has a 0 infront of it, remove it
        if (dateEvent[1][0] == "0") {
            dateEvent[1] = dateEvent[1][1];
        }
        // create formatted dateEvent into new Date object
        dateEvent = new Date(dateEvent.join('-'));
        
        if (dateEvent >= Mintoday && dateEvent <= Maxtoday) {
            document.getElementById(ErrorID).innerHTML = "";
            return true;
        } else {
            console.log("Date must be between " + Minyear+'-'+Minmonth+'-'+Minday + " and " + Maxyear+'-'+Maxmonth+'-'+Maxday);
            document.getElementById(ErrorID).innerHTML = "Date must be between " + Minyear+'-'+Minmonth+'-'+Minday + " and " + Maxyear+'-'+Maxmonth+'-'+Maxday;

            return false;
        }
}
}
function ReportStolen() {
    // calculate max and min days of 10 days before and none after todays date.
    if (GetMaxMinDays("StolenDateEvent","StolenDateEventError") == true){
        //refresh dateEvent variable
        dateEvent = document.getElementById("StolenDateEvent").value;
        //get map Lat and Lng
        var eventLat = marker2.getPosition().lat();
        var eventLng = marker2.getPosition().lng();
        var ExtraData = [
            { 'name': 'dateEvent', 'value': dateEvent },
            { 'name': 'eventLat', 'value': eventLat },
            { 'name': 'eventLng', 'value': eventLng },
            { 'name': 'Bike_ID', 'value': parseInt(localStorage.getItem(`Bike`))+1 },
            { 'name': 'phpFunction', 'value': 'RegisterStolen' },
        ];
        var Data = "";
        //manually serialize the data
        for (x in ExtraData) {
            Data += ExtraData[x].name + "=" + ExtraData[x].value + "&";
        }
        //POST to BikeModification.php with Serialized Data and Function RegisterStolen
        
        $.ajax({
            type: "POST",
            url: "BikeModification.php",
            data: (Data.slice(0, -1)).replace(" ", "%20"),
            datatype: 'json',
            success: function(msg) {
            //Clean msg
            dataJson = JSON.parse(msg.replace('Connecting', ''));
            //after success, refresh bikes to reset report stolen buttons
            if (dataJson["result"] == "success") {
                document.getElementById("formStolenBike").reset();
                alert("Report Stolen Bike Successful");
                LookupBikes();
            }else if (dataJson["result"] == "failed"){
                alert("Issue with reporting stolen bike");
            } else {
                alert("Issue with form");
            }
            },
            error: function(msg) {
                console.log(msg);
            }
        });
    } else {
        return;
    }
    }

function LookupBikes() {
    //Grab User ID to find related bikes
    var User_ID = `User_ID=${sessionStorage.getItem('uID')}`;
    //POST to PHP with User_ID
    $.ajax({
        type: "POST",
        url: "BikeModification.php",
        data: User_ID + "&phpFunction=Lookup",
        datatype: 'json',
        success: function(msg) {
            //Clean msg
            dataJson = JSON.parse(msg.replace('Connecting', ''));
            //if Result isnt false start inserting into table
            if (dataJson['result'] != 'false') {
                //Get table and clear it to stop overlapping
                document.getElementById('BikeTable').innerHTML = "";
                //if LAT has a variable, then make the report stolen button, if now, dont input it. 
                for (x in dataJson) {
                    let Button = "";
                    if (typeof dataJson[x]['LAT'] == 'object') {
                        Button = `<form class="ReportStolenForm"><input id="ReportStolenButton.${x}" type="button" value="Report Stolen" onclick="STopenForm(this.id)"></form>`;
                        
                    }
                    // Insert Row into Table
                    document.getElementById('BikeTable').innerHTML += `<tr id="Row${x}"><tr><td id="BikeDatabaseRow"><label >${dataJson[x]['Brand']}</label></td><td><p>${dataJson[x]['Model']}</p></td><td  class="BikeImage"><img id="bannerImg${x}"></img><br/><br/></td></tr><tr><td>${Button}</td></tr>`;
                    //Convert Binary to Base 64 to produce an image
                    let binString = '';
                    dataJson[x]['Images'].split(' ').map(function(bin) {
                        binString += String.fromCharCode(parseInt(bin, 2));
                    });
                    let proImage = new Image();
                    proImage.src = binString;
                    //put image in local storage and call it in image
                    localStorage.setItem(`bannerImg${x}`, binString)
                    document.getElementById(`bannerImg${x}`).src = localStorage.getItem(`bannerImg${x}`);
                }
            }
        },
        error: function(msg) {
            console.log(msg);
        }

    });
}
function PriorityCheck() {
    //is User_ID in local storage, and what is the priority
    var User_ID = sessionStorage.getItem('uID');
    if (User_ID != null) {
        var Priority = sessionStorage.getItem('Priority');
        if (Priority == 1 ) {
            // Priority 1 = Send to polic page
            window.location = "../../Private/index.html";
        }  else {
            //Stay on page, lookup bikes
            LookupBikes();
        }
    } else {
        window.location = "../../index.html";
    }
}
PriorityCheck();
