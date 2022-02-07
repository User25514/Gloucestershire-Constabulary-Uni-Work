function SystemLogin() {
    var Email = document.getElementById("LoginEmail").value;
    var Password = document.getElementById("LoginPassword").value;
    if (Email != "" && Email.includes("@" && ".") && Email.includes(".com" || ".co.uk")) {
        alert("Login.");
        console.log("Login.");
        return true;
    } else {
        alert("Use a valid email address.");
        return false;
    }
}