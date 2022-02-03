document.getElementById("LoginSubmit").onclick = SystemLogin;
function SystemLogin() {
    var Email = document.getElementById("LoginEmail").value;
    var Password = document.getElementById("LoginPassword").value;
    alert("Hello " + Email)
}