function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //pode alterar?
        configurable: false //pode editar ou apagar?
    });
}

const p1 = new Produto("camiseta", 20, 3);
p1.estoque = 5000;
delete p1.estoque;
console.log(p1);