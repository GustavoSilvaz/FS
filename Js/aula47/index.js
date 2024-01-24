function Pessoa (nome, sobrenome) {

    const ID = 123;

    const metodoInterno = function() {
        
    };
    //this é um objeto vazio e serve para criar o novo objeto de 
    //pessoa com as propriedades nome e sobrenome.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ": sou um método");
    };
}

const p1 = new Pessoa("Gustavo", "Silva");
const p2 = new Pessoa("Luiz", "Otávio");

p1.metodo();
