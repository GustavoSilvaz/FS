function falaOi () {
    console.log("Falando oi!");
}

falaOi();

const nome = function () {
    console.log('Gustavo')
};

nome();

function executa (funcao) {
    console.log("Executando")
    funcao();
} 

executa (nome);

const arrow = () => { 
    console.log("Sou uma arrow")
};

arrow();

const obj = {
    falar: function() {
        console.log('Estou falando'); // true
    }
};
obj.falar();