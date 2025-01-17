//Criamos um objeto com dois métodos, getNome e setNome
class pessoa {
     nome: "matheus",

    getNome: function () {
        return this.nome; //Usamos this para mostrar que o que deve ser usado é o atributo deste objeto
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

pessoa.setNome("Joaquim"); //Usamos setNome para alterar o atributo nome
console.log(pessoa.getNome()); //Usamos getNome para exibir o atributo nome
