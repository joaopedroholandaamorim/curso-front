function binario() {
    var x = document.getElementById("binario").value;
    var vet = x.split("");
    var i;
    var res = 0;
    var tam = vet.length;
    for(i = 1; i <= tam; i++) {
        res += (parseInt(vet[tam - i])) * (2 ** (i-1));
    } 
    document.getElementById("res1").innerHTML = res;
}