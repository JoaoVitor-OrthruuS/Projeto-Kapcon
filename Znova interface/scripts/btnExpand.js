const btnExpandGasto = document.getElementById("btnExpandGasto");
const btnExpandReceita = document.getElementById("btnExpandReceita");

btnExpandGasto.addEventListener("click", () => {
    const formGastos = document.getElementById("formGastos");
    const tituloGastos = document.getElementById("tituloGastos");
    if (formGastos.style.display === "none") {
        formGastos.style.display = "flex";
        tituloGastos.style.display = "block";

        btnExpandGasto.firstElementChild.innerText = "Fechar Gasto";
    } else {
        formGastos.style.display = "none";
        tituloGastos.style.display = "none";

        btnExpandGasto.firstElementChild.innerText = "Adicionar Gasto";
    }
});

btnExpandReceita.addEventListener("click", () => {
    const formReceitas = document.getElementById("formReceitas");
    const tituloReceitas = document.getElementById("tituloReceitas");

    if (formReceitas.style.display === "none") {
        formReceitas.style.display = "flex";
        tituloReceitas.style.display = "block";

        btnExpandReceita.firstElementChild.innerText = "Fechar Receita";
    } else {
        formReceitas.style.display = "none";
        tituloReceitas.style.display = "none";

        btnExpandReceita.firstElementChild.innerText = "Adicionar Receita";
    }
});
