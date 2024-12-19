const produtos = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Calça", preco: 80 },
    { nome: "Tênis", preco: 120 },
    { nome: "Boné", preco: 40 },
];

produtos.forEach((produto) => {
    if (produto.preco > 50) {
        console.log(
            `Nome do produto: ${produto.nome}, Valor do produto: ${produto.preco}`
        );
    }
});
