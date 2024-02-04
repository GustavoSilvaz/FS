function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        //value: estoque, //valor
        //writable: false, //pode alterar?
        configurable: true, //pode editar ou apagar?
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem');
                }
            estoquePrivado = valor;
        }
    });
}

function criaproduto () {
    return {
        get nome(){
            return nome},
        set nome(valor)  {
            valor = valor.replace('coisa', '');
            nome = valor;
        },
    };
}

const p2 = criaproduto('Camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome);
//const p1 = new Produto("camiseta", 20, 3);
//console.log(p1);
//p1.estoque = "O valor que eu quero";
//console.log(p1.estoque)