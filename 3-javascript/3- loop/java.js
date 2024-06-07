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

function decimal() {
    var x = parseInt(document.getElementById("decimal").value);
    var vet = [];
    var i = 0;
    if (x == 1) {
        document.getElementById("res2").innerHTML = "01";
    }
    else if (x == 0) {
        document.getElementById("res2").innerHTML = "00";
    }
    else if (x != 1 && x != 0) {
        while(x != 1) {
            vet[i] = x%2;
            console.log(x%2);
            console.log(Math.floor(x/2));
            x = Math.floor(x/2);
            if(x == 1){
                i++;
                vet[i] = 1;
                break;
            }
            i++;
        }
        console.log(vet);
        var array = vet.reverse();
        var tam = array.length;
        var numero = "";
        for( i = 0;i < tam;i++){
            numero += array[i];
        }
        document.getElementById("res2").innerHTML = numero;
    }  
    else {
        var text = "numero invalido!"
        document.getElementById("res2").innerHTML = text;
    }
}