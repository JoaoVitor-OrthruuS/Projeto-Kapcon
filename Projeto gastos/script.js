const btnAddGasto = document.getElementById("btnAddGasto");

btnAddGasto.addEventListener("click", () => {
    const data = document.getElementById("data").value;
    const descricao = document.getElementById("descricao").value;
    const categoria = document.getElementById("categoria").value;
    const valor = document.getElementById("valor").value;
    const formaPagamento = document.getElementById("formaPagamento").value;

    const saida = document.getElementById("saida");

    saida.innerHTML += `<tr><td>${data}</td><td>${descricao}</td><td>${categoria}</td><td>${valor}</td><td>${formaPagamento}</td></tr>`;
});
