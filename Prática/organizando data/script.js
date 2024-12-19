const datas = [
    { data: "2024-01-01" },
    { data: "2024-02-14" },
    { data: "2024-12-25" },
];

datas.forEach((obj) => {
    const dataFormatada = new Date(obj.data).toLocaleDateString("pt-BR");
    console.log("Data formatada:", dataFormatada);
});
