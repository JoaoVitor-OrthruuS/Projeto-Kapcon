var botao = document.getElementById("botao");

function contar() {
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var passo = document.getElementById("passo").value;
    var res = document.getElementById("processamento");

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert("Estão faltando dados");
    } else {
        res.innerHTML = `Contando:`;
        for (var c = inicio; c <= fim; c += passo) {
            inicio = inicio + passo;
            res.innerHTML += `${c}`;
        }
    }
}

botao.addEventListener("click", contar);
