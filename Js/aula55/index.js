/* const pessoa ={
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
mano.idade = 22;
mano.falarNome = function () {
    return (`${this.nome} está falando seu nome`);
};

mano.falarNome();

delete mano.sobrenome

console.log(mano)

mano.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(mano.getDataNascimento());

for (let chave in mano){
    console.log(mano[chave]);
}
 */

/* factory function */
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa("Luiz", "Otavio");
console.log(p1.nomeCompleto)

/* constructor function */
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa("Gustavo", "Silva");
console.log(p2); 





