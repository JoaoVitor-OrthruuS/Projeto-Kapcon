let btnAdicionar = document.getElementById("btnAdicionar");

function adicionarTarefas() {
    const novaTarefa = document.getElementById("tarefa").value;
    const ListaTarefas = document.getElementById("ListaTarefas");

    if (tarefa === "") {
        alert("Por favor digite uma nova tarefa!");
    }

    // Criar elementos do DOM

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = novaTarefa;

    const btnConcluir = document.createElement("button");
    btnConcluir.innerText = "Concluir";
    const btnExcluir = document.createElement("button");
    btnExcluir.innerText = "Excluir";

    // Adicionar eventos aos botões

    btnConcluir.addEventListener("click", () => {
        span.classList.toggle("done");
    });

    btnExcluir.addEventListener("click", () => {
        ListaTarefas.removeChild(li);
    });

    // Montar a estrutura do item
    li.appendChild(span);
    li.appendChild(btnConcluir);
    li.appendChild(btnExcluir);

    // Adicionar o item à lista

    ListaTarefas.appendChild(li);

    // Limpar o campo de texto

    novaTarefa.innerText = "";
}

btnAdicionar.addEventListener("click", adicionarTarefas);
