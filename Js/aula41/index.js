/* function soma (a,b) {
    return a+b;
}

soma(5, 2);  */

/* function criaPessoa (nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', "Otavio");
const p2 = {
    nome: 'José',
    sobrenome: 'Sousa'
};
console.log(typeof p1);
console.log(typeof p2); */

/* function falaFrase (comeco) {
    function fslaResto (resto) {
        return comeco + ' ' + resto;
    }
    return fslaResto;
}

const ola = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
 */

function criaMultiplicador (multoiplicador) {
    return function (n) {
        return n * multoiplicador;
    };
}
const duplica = criaMultiplicador(2)
console.log(duplica(2)) 