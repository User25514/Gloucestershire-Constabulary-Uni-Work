// JavaScript Document

$("#formSellItem").on('submit', function(e){
	
	var formData=new FormData(this);
	console.log(formData);
	e.preventDefault();
	//alert("hello");
	$.ajax({
		url:"SellItemDAO.php",
		method:"POST",
		data:formData,
		contentType:false,
		cache:false,
		processData:false,
		success: function(echoedMsg){
			alert("Item uploaded!!!");
		}
	});
});