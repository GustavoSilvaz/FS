const pessoa = {
    nome: 'Gustavo',
    sobrenome:'Silva'
}
 // Gustavo

function criaPessoa (nome, sobrenome, idade) {
    return{
        nome: nome,
        pessoa: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Gustavo','silva', 22)

console.log(pessoa1)
