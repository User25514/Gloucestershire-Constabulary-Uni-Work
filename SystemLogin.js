function SystemLogin() {
    var PageInfo = {
        Email: document.getElementById("LoginEmail").value,
        Password: document.getElementById("LoginPassword").value
    };
    if (PageInfo.Email != "" && PageInfo.Email.includes("@" && ".") && PageInfo.Email.includes(".com" || ".co.uk")) {
        if (PageInfo.Password != "" && PageInfo.Password.length >= 8 && PageInfo.Password.length <= 16 && PageInfo.Password.match(/[a-z]/i) && PageInfo.Password.match(/[A-Z]/i) && PageInfo.Password.match(/[0-9]/i) && PageInfo.Password.match(/[!@#$%^&*]/i)) {
            alert("Login.");
            return true;
        } else {
            alert("Your password must be between 8 and 16 characters long, contain at least one lowercase letter, one uppercase letter, one number and one special character.");
            return false;
        }
    } else {
        alert("Use a valid email address.");
        return false;
    }
}