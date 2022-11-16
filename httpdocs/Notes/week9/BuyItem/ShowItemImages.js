getItemImages();
function getItemImages() {
    var itemID = sessionStorage.getItem('ItemID');
    var html = '';
    $.post("BuyItemDAO.php","phpFunction=getItemImages&itemID="+itemID,function(data) {
        var html = '<h2> Item No: ' + itemID + '</h2> <br>';
        $.each(data,function(key,value) {
            var imageID = '../ItemImages/' + value['ImageID'];
            html = html + '<img src="' +imageID + '" alt="' +  imageID +'"height="400" width="400">';
        });
        $('#sectionItemImages').html(html);
    },"json");
    
}