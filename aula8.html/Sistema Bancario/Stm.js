var conf = document.querySelector("#conf")
function cal(){

var y = document.querySelector("#car").value;
console.log(y)
var x = document.querySelector("#pro").value;
console.log(x)
if(y >= x){
    alert("Saldo suficiente")
}
if(y < x){
    alert("saldo insuficiente")
}
}


