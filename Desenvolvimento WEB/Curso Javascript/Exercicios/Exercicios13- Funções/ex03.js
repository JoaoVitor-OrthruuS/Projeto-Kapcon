function calcBaskara(a, b, c) {
    let delta = b ** 2 - 4 * a * c;
    let resultado;
    if (delta > 0) {
        let resultado1 = (-b + Math.sqrt(delta)) / (2 * a);
        let resultado2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [resultado1, resultado2];
    } else if (delta == 0) {
        return (resultado = -b / (2 * a));
    } else if (delta < 0) {
        return `O valor de delta é negativo, portando a equação não possuo raizes`;
    }
}

console.log(calcBaskara(10, 457457, 2346423));
