function saudacao (nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao ("Luiz");
console.log(variavel);

function soma (x,y) {
    let result = x + y;
    return result;
}

console.log(soma(5,4))

function ola (nome1) {
    return `Bom dia! ${nome1}`;
}

let nome1 = "Gustavo";
console.log(ola(nome1));

const raiz = (n) => n ** 0.5;
    

console.log(raiz(9))