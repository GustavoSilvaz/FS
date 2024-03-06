/* const nome = 'Luiz';
const sobrenome = 'Miranda';

const falanome = () => nome + ' ' + sobrenome;

/* 
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falanome = falanome;  */

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;