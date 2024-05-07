function calc_media(array){
    let media = 0;
    for(var i = 0;i<4;i++){
        media += array[i];
    }
    media = media / 4;
    return media;
}




document.getElementById('formulario').addEventListener('submit', function( evento ) {
    evento.preventDefault();

    if(this.getAttribute('class').match(/erro/)){
        return false;
    }

    let inputnumeros = document.querySelectorAll('.numeros');
    let array = [];
    inputnumeros.forEach(function(input){ // pecorre a Nodlist
        let numero = Number(input.value);
        array.push(numero);  // acessa o valor do input converte para numero e joga na array
    });
    console.log(array);
    document.getElementById('res').innerHTML = "O resultado da média é : " + calc_media(array);

});




let inputs = document.querySelectorAll('.numeros');

for(let emfoco of inputs){
    valida(emfoco);
}





function valida(elemento){
    elemento.addEventListener('blur', function(event){
        event.preventDefault();
        if(this.value  == ""){
            document.querySelector('.error').innerHTML = "verifique o preenchiento do campos em vermelho";
            this.classList.add('er');
            this.parentNode.classList.add('erro');
            return false;
        }
        else{
            document.querySelector('.error').innerHTML = "";
            this.classList.remove('er');
            this.parentNode.classList.remove('erro');
        }
    });
}