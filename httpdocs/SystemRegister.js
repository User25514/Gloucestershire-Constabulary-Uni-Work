$('#formUserRegistration').submit(function(event) {
    var PageInfo = {
        FirstName: document.getElementById("RegisterFirstName").value,
        LastName: document.getElementById("RegisterLastName").value,
        DOB: document.getElementById("RegisterDOB").value,
        PhoneNumber: document.getElementById("RegisterPhoneNumber").value,
        Email: document.getElementById("RegisterEmail").value,
        Password: document.getElementById("RegisterPassword").value,
        ConfirmPassword: document.getElementById("RegisterConfirmPassword").value
    };
    formData = $('#formUserRegistration').serialize();
    event.preventDefault();
    /*Check if First Name is longer or equal to 2 */
    if (PageInfo.FirstName.length >= 2) {
        document.getElementById("FirstNameError").innerHTML = "";
        /* Check if Last Name is longer or equal to 2 */
        if (PageInfo.LastName.length >= 2) {
            document.getElementById("LastNameError").innerHTML = "";
            /* Check if DOB is longer or equal to 10 */
            console.log(PageInfo.DOB.length);
            if (PageInfo.DOB.length == 10) {
                document.getElementById("DateOfBirthError").innerHTML = "";
                /* Check if DOB is equal to 10 */
                if (PageInfo.PhoneNumber.length >= 10 <= 11) {
                    document.getElementById("PhoneNumberError").innerHTML = "";
                    /* Check Email*/
                    if (PageInfo.Email.includes("@") && PageInfo.Email.includes(".") && PageInfo.Email.includes(".com") || PageInfo.Email.includes(".co.uk")) {
                        document.getElementById("EmailError").innerHTML = "";
                        /* Check Password rules*/
                        if (PageInfo.Password.length >= 8 && PageInfo.Password.length <= 16 && PageInfo.Password.match(/[a-z]/i) && PageInfo.Password.match(/[A-Z]/i) && PageInfo.Password.match(/[0-9]/i) && PageInfo.Password.match(/[!@#$%^&*.]/i)) {
                            document.getElementById("PasswordOneError").innerHTML = "";
                            if (PageInfo.Password == PageInfo.ConfirmPassword) {
                                document.getElementById("PasswordTwoError").innerHTML = "";
                                //Event handler for registration form submit
                                $.ajax({
                                    type: "POST",
                                    url: "userRegistrationDAO.php",
                                    data: formData + "&phpFunction=Register",
                                    datatype: 'json',
                                    success: function(msg) {
                                        console.log(msg);
                                        dataJson = JSON.parse(msg.replace('Connecting', ''));
                                        console.log(dataJson);
                                        if (dataJson["result"] == "false") {
                                            document.getElementById("EmailError").innerHTML = "Email or phone number already exist";
                                            return;
                                        } else {
                                            sessionStorage.setItem('uID',dataJson);
                                            sessionStorage.setItem('Priority',0);
                                             
                                        }
                                        window.location = "Public/index.html";
                                    },
                                    error: function(msg) {
                                        console.log(msg);
                                    }
                                });

                            } else {
                                document.getElementById("PasswordTwoError").innerHTML = "Your passwords do not match.";
                                return false;
                            }
                        } else {
                            document.getElementById("PasswordOneError").innerHTML = "Your password must be between 8 and 16 characters long, contain at least one lowercase letter, one uppercase letter, one number and one special character.";
                            return false;
                        }
                    } else {
                        document.getElementById("EmailError").innerHTML = "Invalid email address.";
                        return false;
                    }
                } else {
                    document.getElementById("PhoenNumberError").innerHTML = "Invalid Phone Number";
                    return false;
                }
            } else {
                document.getElementById("DateOfBirthError").innerHTML = "Invalid DoB";
                return false;
            }
        } else {
            document.getElementById("LastNameError").innerHTML = "Invalid Last Name";
            return false;
        }
    } else {
        document.getElementById("FirstNameError").innerHTML = "Invalid First Name";
        return false;
    }
});