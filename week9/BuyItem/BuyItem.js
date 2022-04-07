console.log("Start Script1");
function getAllItemList() {
    console.log("get akk items2");
    $.post("BuyItemDAO.php","phpFunction=getItemList",function(data) {
        console.log("start this get itemlist3");
        var html = '<table border="1">';
        html = html + '<tr><th>Item No</th><th>Item Name</th> <th>Description</th> <th>Price</th> <th>Action 1</th><th>Action 2</th></tr>';
        console.log("html start");
        $.each(data,function(key,value) {
            console.log("html function");
            html = html + '<tr>';
            var itemID = value['ItemID']
            html = html + '<td>' + itemID + '</td>';
            html = html + '<td>' + value['ItemDescription'] + '</td>';
            html = html + '<td>' + value['Price'] + '</td>';
            html = html + '<td> <input type="button" id="' + itemID + '" value="Show Images" class="btnShowImages"> </input></td>';
            html = html + '<td> <input type="button" id="' + itemID + '" value="Buy Item" class="btnBuyItem"></input></td>';
            html = html + '</tr>';
        });
        html = html + '</table>';
        $('#sectionItemList').html(html);
    },"json");
}
getAllItemList();
console.log("html get all item4");
$(document).on('click','.btnShowImages',function() {
    var itemID = this.id;
    sessionStorage.setItem('ItemID',itemID);
    window.open("./ShowItemImages.html","popupWindow","width=400, height=400, scrollbars=yes")
});
