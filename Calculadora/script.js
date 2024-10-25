function adicionar(numero) {
    let resultado = (document.getElementById("resultado").innerHTML += numero);
}

function limpar() {
    let resultado = (document.getElementById("resultado").innerHTML = ``);
}

function calcular() {
    let resultado = document.getElementById("resultado");
    resultado.innerText = eval(resultado.innerText);
}
