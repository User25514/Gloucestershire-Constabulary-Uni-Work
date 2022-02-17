var CS_Lowercase = "abcdefghijklmnopqrstuvwxyz";
var CS_Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var CS_Numbers = "0123456789";
var CS_Symbols = "!\"!£$%^&*()_+=-{}[]:;@'~#<,>.?/|\\`¬";
document.getElementById("btngeneratepassword").addEventListener("click",function(){
    document.getElementById("txtpassword").value = generatePassword();
})
function generatePassword() {
    var result = "";
    for (var i = 0;i<5; i++)
        result += CS_Lowercase[randomNumber(CS_Lowercase.length)];
    for (var i = 0;i<5; i++)
        result += CS_Uppercase[randomNumber(randomNumber(CS_Uppercase.length))];
    for (var i = 0;i<3; i++)
        result += CS_Numbers[randomNumber(CS_Numbers.length)];
    for (var i = 0;i<3; i++)
        result += CS_Symbols[randomNumber(CS_Symbols.length)];
    return result;
    }
function randomNumber(n) {
    var x = Math.floor(Math.random()*n);
    return x;
}