var botao = document.getElementById("botao");

function calcular() {
    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var imc = peso / altura ** 2;

    imc = imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById(
            "resultado"
        ).innerHTML = `Olá ${nome}, seu IMC é: ${imc}, você está no nível de magreza!`;
    } else if (imc >= 18.5 || imc <= 24.9) {
        document.getElementById(
            "resultado"
        ).innerHTML = `Olá ${nome}, seu IMC é: ${imc}, você está no nível normal!`;
    } else if (imc >= 25.0 || imc <= 29.9) {
        document.getElementById(
            "resultado"
        ).innerHTML = `Olá ${nome}, seu IMC é: ${imc}, você está no nível de sobrepeso!`;
    } else if (imc >= 30.0 || imc <= 39.9) {
        document.getElementById(
            "resultado"
        ).innerHTML = `Olá ${nome}, seu IMC é: ${imc}, você está no nível de obesidade!`;
    } else if (imc >= 40.0) {
        document.getElementById(
            "resultado"
        ).innerHTML = `Olá ${nome}, seu IMC é: ${imc}, você está no nível de obesidade grave!`;
    }
}
botao.addEventListener("click", calcular);
