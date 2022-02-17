document.getElementById("txtMile").addEventListener("input", function() {
    var mileVal = document.getElementById("txtMile").value;
    document.getElementById("txtKM").value = mileToKM(mileVal);
});
document.getElementById("txtKM").addEventListener("input", function() {
    var kmVal = document.getElementById("txtKM").value;
    document.getElementById("txtMile").value = kmToMile(kmVal);
});
function mileToKM(mileVal){
    return mileVal * 1.61;
}
function kmToMile(kmVal) {
    return kmVal * 0.62;
}