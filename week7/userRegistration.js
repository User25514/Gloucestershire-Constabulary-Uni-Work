//Event handler for registration form submit
$('#formUserRegistration').submit(function(event){
    formData = $('#formUserRegistration').serialize();
    event.preventDefault();
    $.ajax({
        type:"POST",
        url:"userRegistration/userRegistrationDAO.php",
        data:formData+"&phpFunction=create",
        success:function(msg){
            $("#divMessage").html(msg);
        },
        error:function(msg){
            console.log(msg)
        }
    });
});