const array = [1,2,3];
array.push(4);
array[0]='Luiz';
console.log(array)

const pessoa = {

};

const pessoa1 = {
    nome: 'Gustavo',
    sobrenome: 'Silva',
    idade: 25,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} Está falando Oi!`);
    }
};

pessoa1.fala();

console.log(pessoa1.nome);

function criaPessoa (nome,sobrenome,idade) {
    return {
        nome, sobrenome, idade
    };
}

const pessoa2=criaPessoa('Gustavo','Silva',30);
const pessoa3=criaPessoa('Lucas','Santos',20);
const pessoa4=criaPessoa('Thay','Elisa',90);

console.log(pessoa2,pessoa3,pessoa4)