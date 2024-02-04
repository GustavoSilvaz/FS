function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        //value: estoque, //valor
        //writable: false, //pode alterar?
        configurable: false, //pode editar ou apagar?
        get: function(){
            return estoque;
        },
        set: function(valor){
            
        }
    });
}

const p1 = new Produto("camiseta", 20, 3);
console.log(p1);
p1.estoque = "O valor que eu quero"
console.log(p1.estoque)