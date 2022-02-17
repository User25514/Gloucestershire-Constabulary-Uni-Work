document.getElementById("txtMile2").addEventListener("input", function() {
    var mileVal = document.getElementById("txtMile2").value;
    mileToKM(mileVal, function (kmVal){
        document.getElementById("txtKM2").value = kmVal;
    });
});
document.getElementById("txtKM2").addEventListener("input", function() {
    var kmVal = document.getElementById("txtKM2").value;
    KmToMile(kmVal, function (mileVal){
        document.getElementById("txtMile2").value = mileVal;
    });
});
function mileToKM(mileVal,callBackFunc){
    callBackFunc(mileVal * 1.61);
}
function kmToMile(kmVal,callBackFunc){
    callBackFunc(kmVal * 0.62);
}