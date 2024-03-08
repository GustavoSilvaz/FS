const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escreve')
const ler = require('./modules/ler')

/* const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'José'},
    {nome: 'Chicó'}
]

const json = JSON.stringify(pessoas, '',2); //transforma um objeto json em string
escreve(caminhoArquivo, json) */

async function lerArquivo(caminho) {
   const dados = await ler(caminho);
   renderizaDados(dados);
}

function renderizaDados(dados) {
    dados= JSON.parse(dados)

   dados.forEach(val => console.log(val.nome))
}

lerArquivo(caminhoArquivo)