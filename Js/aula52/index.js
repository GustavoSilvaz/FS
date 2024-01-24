const pessoas = [
    {nome:"Gustavo", idade: 12},
    {nome:"Antony", idade: 23},
    {nome:"Marcos", idade: 45},
    {nome:"Isa", idade: 76},
    {nome:"Joao", idade: 15},
    {nome:"Iracema", idade: 24},
];

const nomeGrande = pessoas.filter(obj=> obj.nome.length >= 5 );
console.log(nomeGrande);