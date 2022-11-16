$('#formUserLogin').submit(function(event) {
    formData = $('#formUserLogin').serialize();

    event.preventDefault();

    $.ajax({
        type: "POST",
        url: "userLoginDAO.php",
        data: formData + "&phpFunction=login",
        datatype: 'json',
        success: function(msg) {
            dataJson = JSON.parse(msg);
            if (dataJson['result'] == 'false') {
                $("#divMessage").html("Wrong username or password")
            } else {
                firstName = dataJson['First_Name'];
                lastName = dataJson['Last_Name'];
                sessionStorage.setItem('firstName', firstName);
                sessionStorage.setItem('lastName', lastName);
                //window.location="../SellItemPage/SellItem.html";
            }
        },

    });
});