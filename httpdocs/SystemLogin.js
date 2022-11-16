$('#formUserLogin').submit(function(event) {
    //Grab Email and Password
    var PageInfo = {
        Email: document.getElementById("LoginEmail").value,
        Password: document.getElementById("LoginPassword").value
    };
    //Email Data Validation
    if (PageInfo.Email != "" && PageInfo.Email.includes("@" && ".") && PageInfo.Email.includes(".com" || ".co.uk")) {
        //serialize data for sending to php
        formData = $('#formUserLogin').serialize();

        event.preventDefault();
        //ajax call to php Login.
        $.ajax({
            type: "POST",
            url: "userRegistrationDAO.php", 
            data: formData + "&phpFunction=Login",
            datatype: 'json',
            success: function(msg) {
                var dataJson = JSON.parse(msg.replace('Connecting', '')); //remove Connecting from the json string.

                if (dataJson['result'] == 'false') {
                    //if the result is false, then tell iser email and password are incorrect.
                    document.getElementById("LoginError").innerHTML = "Wrong username or password";
                } else {
                    //session storage User ID for sessions past login.
                    sessionStorage.setItem('uID', dataJson['User_ID']);
                    sessionStorage.setItem('Priority', dataJson['0']);
                    //from PHP, grab priority level and redirect to correct page.
                    if (dataJson['0'] == 1) {
                        //Police Page
                        window.location = "Private/Investigations/index.html";
                    } else {
                        //Public Page
                        window.location = "Public/index.html";
                    }
                }
            },
            error: function(msg) {
                //log error.
                console.log(msg);
            }

        });
    }
});