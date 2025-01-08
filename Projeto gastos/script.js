const btnAddGasto = document.getElementById("btnAddGasto");
let total = 0;

btnAddGasto.addEventListener("click", () => {
    //Entrada de todos os dados de gastos
    const dados = {
        data: document.getElementById("data").value,
        descricao: document.getElementById("descricao").value,
        categoria: document.getElementById("categoria").value,
        valor: document.getElementById("valor").value,
        formaPagamento: document.getElementById("formaPagamento").value,
    };

    //Testa se todos os campos foram preenchidos.
    if (
        dados.data === "" ||
        dados.descricao === "" ||
        dados.categoria === "" ||
        dados.valor === "" ||
        dados.formaPagamento === ""
    ) {
        console.log("Um dos campos está Vazio!");
    } else {
        //Saida do valor total de gastos
        const valorGasto = parseFloat(dados.valor);
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
        Object.values(dados).forEach((dado) => {
            const novoTd = document.createElement("td");
            novoTd.innerText = dado;
            novoTr.appendChild(novoTd);
        });

        //btnDeletar para remover as linhas da tabela
        const btnDeletar = document.createElement("button");
        btnDeletar.innerText = "excluir";
        btnDeletar.classList = "btnDeletar";

        novoTr.appendChild(btnDeletar);

        btnDeletar.addEventListener("click", () => {
            saida.removeChild(novoTr);
            total -= valorGasto;
            valorTotal.innerText = `R$ ${total.toFixed(2)}`;
        });
    }
});
