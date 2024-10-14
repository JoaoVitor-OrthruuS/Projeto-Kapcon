function CalcularMedia(nota1, nota2, nota3, tipo) {
    let media;
    if (tipo.toUpperCase() == "A") {
        media = (nota1 + nota2 + nota3) / 3;
        return media;
    } else if (tipo.toUpperCase() == "P") {
        media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
        return media;
    } else if (tipo.toUpperCase() == "H") {
        media = 3 / (1 / nota1 + 1 / nota2 + 1 / nota3);
        return media;
    }
}

console.log(CalcularMedia(2, 6, 8, "A"));
