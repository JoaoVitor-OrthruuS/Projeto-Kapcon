const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let contadorImpares = 0;
numeros.forEach((numero) => {
    if (numero % 2 != 0) {
        console.log(numero);
        contadorImpares++;
    }
});
console.log(contadorImpares);
