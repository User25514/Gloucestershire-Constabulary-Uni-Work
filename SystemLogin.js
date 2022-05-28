function SystemLogin() {
    var PageInfo = {
        Email: document.getElementById("LoginEmail").value,
        Password: document.getElementById("LoginPassword").value
    };
    if (PageInfo.Email != "" && PageInfo.Email.includes("@" && ".") && PageInfo.Email.includes(".com" || ".co.uk")) {
        if (PageInfo.Password != "" && PageInfo.Password.length >= 8 && PageInfo.Password.length <= 16 && PageInfo.Password.match(/[a-z]/i) && PageInfo.Password.match(/[A-Z]/i) && PageInfo.Password.match(/[0-9]/i) && PageInfo.Password.match(/[!@#$%^&*]/i)) {
            //alert("Login.");
            return true;
        } else {
            document.getElementById("LoginPasswordError").innerHTML = "Invalid Password";
            return false;
        }
    } else {
        document.getElementById("LoginEmailError").innerHTML = "Invalid email address.";
        return false;
    }
}