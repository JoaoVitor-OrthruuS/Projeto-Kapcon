var nome = "João";
var idade = 22;
var sexo = "masculino";

var dinheiros = 1545.5;

console.log(`O aluno ${nome} com ${idade} anos é do sexo ${sexo}`);

dinheiros.toFixed(2).replace(".", ","); //Aumenta as casas decimais (casas após a virgula)
console.log(dinheiros);

dinheiros.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(dinheiros);
