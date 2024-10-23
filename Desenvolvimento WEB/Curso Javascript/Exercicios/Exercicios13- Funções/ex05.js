function calcAreaEquilatero() {}

function calcAreaIsosceles(lado1, lado2, lado3) {
    let base, ladoIgual;

    if (lado1 === lado2 && lado1 !== lado3) {
        ladoIgual = lado1;
        base = lado3;
    } else if (lado1 === lado3 && lado1 !== lado2) {
        ladoIgual = lado1;
        base = lado2;
    } else if (lado2 === lado3 && lado2 !== lado1) {
        ladoIgual = lado2;
        base = lado1;
    }

    const metadeBase = base / 2;
    const altura = Math.sqrt(ladoIgual ** 2 - metadeBase ** 2);
    const area = (base * altura) / 2;
    return area;
}

function calcAreaEscaleno() {}
