var User_ID = sessionStorage.getItem('uID');
if (User_ID != null) {
    var Priority = sessionStorage.getItem('Priority');
    if (Priority == 0 ) {
        window.location = "../../Public/index.html";
    }  
} else {
    window.location = "../../index.html";
}