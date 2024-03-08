const fs = require('fs').promises;


module.exports = () => {
fs.writeFile(caminhoArquivo, json, {flag:'w'}) 
}
// escreve na linha 1
//"w" indica q se o arquivo já existe ele vai apagar e reescrever
//"a" adiciona ao final do que ja tem no arquivo
//"/n" quebra a linha, usado para adicionar algo na próxima linha
