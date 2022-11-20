function cal(){
    var x = document.querySelector("#num1").value;
    console.log(x)
    var y = document.querySelector("#num2").value;
    console.log(y)

    while(x <= y){
        if(x % 2 != 0)
        alert(x)
        console.log(x)
        x++
}
}