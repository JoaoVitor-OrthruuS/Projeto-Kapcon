const palavras = ["banana", "maçã", "banana", "uva", "maçã", "maçã"];

let contadorBanana = 0,
    contadorMaca = 0,
    contadorUva = 0;

palavras.forEach((fruta) => {
    if (fruta == "maçã") {
        contadorMaca++;
    } else if (fruta == "banana") {
        contadorBanana++;
    } else if (fruta == "uva") {
        contadorUva++;
    }
});

console.log(
    `As bananas apareceram ${contadorBanana} vezes, as maçãs apareceram ${contadorMaca} vezes e as uvas apareceram ${contadorUva} vezes.`
);
