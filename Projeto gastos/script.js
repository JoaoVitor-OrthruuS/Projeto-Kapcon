const btnAddGasto = document.getElementById("btnAddGasto");
let total = 0;

btnAddGasto.addEventListener("click", () => {
    //Entrada de todos os dados de gastos
    const dados = [
        document.getElementById("data").value,
        document.getElementById("descricao").value,
        document.getElementById("categoria").value,
        document.getElementById("valor").value,
        document.getElementById("formaPagamento").value,
    ];

    //Testa se todos os campos foram preenchidos.
    if (
        dados[0] === "" ||
        dados[1] === "" ||
        dados[2] === "" ||
        dados[3] === "" ||
        dados[4] === ""
    ) {
        console.log("Um dos campos está Vazio!");
    } else {
        //Saida do valor total de gastos
        const valorGasto = parseFloat(dados[3]);
        const valorTotal = document.getElementById("valorTotal");

        total += valorGasto;
        valorTotal.innerText = `R$ ${total.toFixed(2)}`;

        //Declarando a saida, o tbody que recebe os appends
        const saida = document.getElementById("saida");

        //criando as novas trs para inserir as tds
        const novoTr = document.createElement("tr");

        //append da nova tr para no tbody
        saida.appendChild(novoTr);

        //Criando os novos campos na tabela preenchidos
        dados.forEach((dados) => {
            const novoTd = document.createElement("td");
            novoTd.innerText = dados;
            novoTr.appendChild(novoTd);
        });

        //btnDeletar para remover as linhas da tabela
        const btnDeletar = document.createElement("button");
        btnDeletar.innerText = "excluir";
        btnDeletar.classList = "btnDeletar";

        novoTr.appendChild(btnDeletar);

        btnDeletar.addEventListener("click", () => {
            saida.removeChild(novoTr);
        });
    }
});
