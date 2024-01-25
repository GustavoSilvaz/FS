const numeros = [1,2,3,4,5,6,7,8,9,0];

const numerospares = numeros
.filter(valor=> valor % 2===0)
.map(valor=> valor * 2)
.reduce((ac, valor)=> ac + valor);


console.log(numerospares);


/* const pessoas = [
    {nome:"Gustavo", idade: 12},
    {nome:"Antony", idade: 23},
    {nome:"Marcos", idade: 45},
    {nome:"Isa", idade: 76},
    {nome:"Joao", idade: 15},
    {nome:"Iracema", idade: 24},
];

const nomeGrande = pessoas.map((obj,indice)=> `${indice} ${obj.nome}`);

console.log(nomeGrande); */