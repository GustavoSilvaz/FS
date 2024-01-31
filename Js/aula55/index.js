const pessoa ={
    nome: 'Luiz',
    sobrenome: 'Otavio',
};

const chave = 'nome';
console.log(pessoa.nome)
console.log(pessoa["sobrenome"])
console.log(pessoa[chave])

const mano = new Object();
mano.nome = 'Guzman'
mano.sobrenome = "Young"

delete mano.sobrenome

console.log(mano)
