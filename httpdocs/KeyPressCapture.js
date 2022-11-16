
//If screen is smaller than 550px, then do not connect to text boxes.
if (window.screen.width < 550 || ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )){
    document.getElementById("LoginEmail").readOnly = false;
    document.getElementById("LoginPassword").readOnly = false;
    document.getElementById("RegisterFirstName").readOnly = false;
    document.getElementById("RegisterLastName").readOnly = false;
    document.getElementById("RegisterPhoneNumber").readOnly = false;
    document.getElementById("RegisterEmail").readOnly = false;
    document.getElementById("RegisterPassword").readOnly = false;
    document.getElementById("RegisterConfirmPassword").readOnly = false;

} else {
    //Connect to text boxes once on focus.
    document.getElementById("LoginEmail").onfocus = KeyboardCapture("LoginEmail");
    document.getElementById("LoginPassword").onfocus = KeyboardCapture("LoginPassword");
    document.getElementById("RegisterFirstName").onfocus = KeyboardCapture("RegisterFirstName");
    document.getElementById("RegisterLastName").onfocus = KeyboardCapture("RegisterLastName");
    document.getElementById("RegisterPhoneNumber").onfocus = KeyboardCapture("RegisterPhoneNumber");
    document.getElementById("RegisterEmail").onfocus = KeyboardCapture("RegisterEmail");
    document.getElementById("RegisterPassword").onfocus = KeyboardCapture("RegisterPassword");
    document.getElementById("RegisterConfirmPassword").onfocus = KeyboardCapture("RegisterConfirmPassword");

}
function KeyboardCapture(Location) {
    //Keylogger for text boxes.
    const element = document.querySelector(`#${Location}`);
    //Start capturing keystrokes.
    document.addEventListener("keydown", logKey);
    let Text = document.getElementById(`${Location}`).value;
    const TextString = Text.split("");
    //Function played once key is pressed.
    function logKey(e) {
        if (element === document.activeElement) {
            if (e.key === "Backspace") {
                //to simulate backspace, we need to remove the last character from the string.
                TextString.pop();
            } else if ((e.key).length > 1) {} else {
                if (Location == "LoginPassword" || Location == "RegisterPassword" || Location == "RegisterConfirmPassword") {
                    //count the number of characters in the password to not go above 16.
                    if (TextString.length < 16) {
                        //push key to textbox
                        TextString.push(e.key);
                    } else if (TextString.length == 16) {
                        alert("You cannot have more than 16 characters.");
                    }
                } else {
                    //push key to textbox
                    TextString.push(e.key);
                }
            }
            document.getElementById(`${Location}`).value = TextString.join("");
        } else {
            //stop process so that it doesnt overlap.
            document.removeEventListener("keypress", logKey);
            return;
        }
    }
}