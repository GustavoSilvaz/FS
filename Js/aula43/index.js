function retornaFuncao (nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir (funcao);