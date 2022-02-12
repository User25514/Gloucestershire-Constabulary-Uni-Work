document.getElementById("LoginEmail").onfocus = KeyboardCapture("LoginEmail");
document.getElementById("LoginPassword").onfocus = KeyboardCapture("LoginPassword");
document.getElementById("RegisterFirstName").onfocus = KeyboardCapture("RegisterFirstName");
document.getElementById("RegisterLastName").onfocus = KeyboardCapture("RegisterLastName");
document.getElementById("RegisterPhoneNumber").onfocus = KeyboardCapture("RegisterPhoneNumber");
document.getElementById("RegisterEmail").onfocus = KeyboardCapture("RegisterEmail");
document.getElementById("RegisterPassword").onfocus = KeyboardCapture("RegisterPassword");
document.getElementById("RegisterConfirmPassword").onfocus = KeyboardCapture("RegisterConfirmPassword");

function KeyboardCapture(Location) {
    console.log("start Keyboard");
    const element = document.querySelector(`#${Location}`);
    document.addEventListener("keydown", logKey);
    let Text = document.getElementById(`${Location}`).value;
    const TextString = Text.split("");

    function logKey(e) {
        if (element === document.activeElement) {
            if (e.key === "Backspace") {
                TextString.pop();
            } else if ((e.key).length > 1) {} else {
                if (Location == "LoginPassword" || Location == "RegisterPassword" || Location == "RegisterConfirmPassword") {
                    if (TextString.length < 16) {
                        TextString.push(e.key);
                    } else if (TextString.length == 16) {
                        alert("You cannot have more than 16 characters.");
                    }
                } else {

                    TextString.push(e.key);
                    console.log(Location);
                    console.log(e.key);
                }
            }
            document.getElementById(`${Location}`).value = TextString.join("");
        } else {
            console.log("Kill");
            document.removeEventListener("keypress", logKey);
            return;
        }
    }
}