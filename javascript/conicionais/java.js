function calc() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var sinal = document.getElementById("op").value;

    switch (sinal) {
        case "+" : 
            document.getElementById("resultado").innerHTML = a + b;
            break;
        case "-" : 
            document.getElementById("resultado").innerHTML = a - b;
            break;
        case "/" :
            document.getElementById("resultado").innerHTML = a / b;
            break;
        case "*" :
            document.getElementById("resultado").innerHTML = a * b;
            break;
        default :
            document.getElementById("resultado").innerHTML = "sinal incorreto!!";
            break;
    }

    console.log(a+b);
}