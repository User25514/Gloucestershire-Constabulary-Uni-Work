function SystemRegister() {
    var PageInfo = {
        FirstName: document.getElementById("RegisterFirstName").value,
        LastName: document.getElementById("RegisterLastName").value,
        DOB: document.getElementById("RegisterDOB").value,
        PhoneNumber: document.getElementById("RegisterPhoneNumber").value,
        Email: document.getElementById("RegisterEmail").value,
        Password: document.getElementById("RegisterPassword").value,
        ConfirmPassword: document.getElementById("RegisterConfirmPassword").value
    };
    /* Check if all fields are empty*/
    if (PageInfo.FirstName != "" && PageInfo.LastName != "" && PageInfo.DOB != "" && PageInfo.PhoneNumber != "" && PageInfo.Email != "" && PageInfo.Password != "" && PageInfo.ConfirmPassword != "") {
        /* Check if name, DOB and Phonenumber are the right length*/
        if (PageInfo.FirstName.length >= 2 && PageInfo.LastName.length >= 2 && PageInfo.DOB.length >= 10 && PageInfo.PhoneNumber.length >= 10) {
            /* Check Email*/
            if (PageInfo.Email.includes("@") && PageInfo.Email.includes(".") && PageInfo.Email.includes(".com") || PageInfo.Email.includes(".co.uk")) {
                /* Check Password rules*/
                if (PageInfo.Password.length >= 8 && PageInfo.Password.length <= 16 && PageInfo.Password.match(/[a-z]/i) && PageInfo.Password.match(/[A-Z]/i) && PageInfo.Password.match(/[0-9]/i) && PageInfo.Password.match(/[!@#$%^&*.]/i)) {
                    if (PageInfo.Password == PageInfo.ConfirmPassword) {
                        console.log("Imagine confirm Pass Done");
                        //Event handler for registration form submit
                        $('#formUserRegistration').submit(function(event){
                            formData = $('#formUserRegistration').serialize();
                            event.preventDefault();
                            $.ajax({
                                type:"POST",
                                url:"userRegistrationDAO.php",
                                data:formData+"&phpFunction=create",
                                success:function(msg){
                                    $("#divMessage").html(msg);
                                    alert("Registered.");
                                    return true;
                                },
                                error:function(msg){
                                    console.log(msg)
                                }
                            });
                        });
                        
                    } else {
                        alert("Your passwords do not match.");
                        return false;
                    }
                } else {
                    alert("Your password must be between 8 and 16 characters long, contain at least one lowercase letter, one uppercase letter, one number and one special character.");
                    return false;
                }
            } else {
                alert("Use a valid email address.");
                return false;
            }
        } else {
            alert("Your name, must be at least 2 characters long. Your DOB must be at least 10 characters long. Your phone number must be at least 10 characters long.");
            return false;
        }
    } else {
        alert("Please fill in all fields.");
        return false;
    }
}