function cal(){
    var qtdd = prompt('Informe a quantidade de somas que serão realizadas')
    var i = 0
    var z = 0
    while(i < qtdd){
        var x = prompt("Informe um número para somar");
        i++;
        console.log(x)
        z = z + parseFloat(x)
        console.log(z)
    }
    var resultado = alert('O resultado é igual a: ' + z)
}

