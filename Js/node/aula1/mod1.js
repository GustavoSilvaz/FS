/* const nome = 'Cristiano';
const sobrenome = 'Ronaldo';
const idade = 35;
const falaNome = () => nome+' '+sobrenome

exports.nome=nome;
exports.sobrenome=sobrenome;
exports.falaNome=falaNome;
this.qualquercoisa="O que eu quiser exportar"; */

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
/* module.exports.nome = 'Luiz'
exports.Pessoas = Pessoas
this.sobrenome= 'Qualquer coisa' */

const nome = 'Luiz'
const sobrenome = 'Miranda'

module.exports = {
    nome, sobrenome, Pessoa
}

