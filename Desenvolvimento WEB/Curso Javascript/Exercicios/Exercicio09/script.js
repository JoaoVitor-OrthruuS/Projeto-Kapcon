var botao = document.getElementById("botao");

function criar_tabuada() {
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");
    var r;

    if (numero.length == 0) {
        window.alert("Por Favor Digite um número");
    } else {
        resultado.innerHTML = `A sua tabuada é:<br>`;
        for (var c = 1; c <= 10; c++) {
            r = c * numero;
            resultado.innerHTML += `${c} x ${numero} = ${r}<br>`;
        }
    }
}

botao.addEventListener("click", criar_tabuada);
