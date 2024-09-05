var num = [5, 8, 2, 9, 3];
num.push(1);
console.log(`nosso vetor é: ${num}`);
console.log(`O primeiro valor do vetor é: ${num[0]}`);
console.log(`O vetor tem ${num.length} posições`);
//repetição com variaveis compostas
//for (c = 0; c < num.length; c++) {
//    console.log(`${num[c]}`);
//}

//Simplificação de repetição com arrays

for (var pos in num) {
    console.log(num[pos]);
}

console.log(num.indexOf(5));
