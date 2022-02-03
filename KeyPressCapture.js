
document.getElementById("LoginEmail").onfocus = KeyboardCapture("LoginEmail");
document.getElementById("LoginPassword").onfocus = KeyboardCapture("LoginPassword");
document.getElementById("RegisterFirstName").onfocus = KeyboardCapture("RegisterFirstName");
document.getElementById("RegisterLastName").onfocus = KeyboardCapture("RegisterLastName");
document.getElementById("RegisterPhoneNumber").onfocus = KeyboardCapture("RegisterPhoneNumber");
document.getElementById("RegisterEmail").onfocus = KeyboardCapture("RegisterEmail");
document.getElementById("RegisterPassword").onfocus = KeyboardCapture("RegisterPassword");
document.getElementById("RegisterConfirmPassword").onfocus = KeyboardCapture("RegisterConfirmPassword");
function KeyboardCapture(Location) {
    const element = document.querySelector(`#${Location}`);
    document.addEventListener("keydown",logKey);
    
    console.log(document.getElementById(`${Location}`).value);
    let Text = document.getElementById(`${Location}`).value;
    const EmailString = Text.split("");
    function logKey(e) {
        if (element === document.activeElement) {
        const Key = e.key;
        if (e.key === "Backspace") {
            EmailString.pop();
        } else if ((e.key).length > 1){
        } else{
            EmailString.push(e.key);
        }
        document.getElementById(`${Location}`).value =EmailString.join("");
        }else{
            document.removeEventListener("keypress",logKey);
            return;
        }
    }
}