const form = document.querySelector("#form");
//Capturamos o formulário 

form.addEventListener('submit', function(e) {
    //adicionamos um escutador no evento submit
    e.preventDefault();
    //quando esse evento acontece a gnt previne o default

    const inputPeso=e.target.querySelector("#peso");
    const inputAltura=e.target.querySelector("#altura");
    //capturamos os dados dos inputs

    const peso= Number(inputPeso.value);
    const altura= Number(inputAltura.value);
    //convertemos os inputs pra number

    if(!peso){
        setResultado("Peso inválido", false);
        return;
    }
    // se peso for NaN ou falso, retorne esse resultado

    if(!altura){
        setResultado("Altura inválida", false);
        return;
    }
    // se altura for NaN ou falso, retorne esse resultado

    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);
    //criamos  funçoes pra pegar os valores de peso, altura e nivel do imc

    const msg = `Seu imc é ${imc} (${nivelImc}).`;
    //mensagem de resultado

    setResultado(msg, true);
    //colocamos a msg como verdadeira

});

function getNivelImc(imc) {
    //função para pegar o nível do imc

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    //array para armazenar os niveis


    if (imc>=39.9) return nivel[5]
    if (imc>=34.9) return nivel[4]
    if (imc>=29.9) return nivel[3]
    if (imc>=24.9) return nivel[2]
    if (imc>=18.5) return nivel[1]
    if (imc<18.5) return nivel[0]
    //circuito baseado no imc que a gente recebe no evento da função
}

function getImc (peso, altura) {
    //funçao para calcular o IMC
    const imc = peso / altura ** 2;
    //calculo do imc
    return imc.toFixed(2);
    //retornamos o imc com 2 casas decimais
}

function criaP () {
    const p = document.createElement('p')
    return p;
    //criamos uma função para um parágrafo
}

function setResultado (msg, isValid) {
    //função para colocarmos as mensagens nos parágrafos se o resultado for válido 

    const resultado = document.querySelector('#resultado');
    //variável para pegar o id da div resultado
    resultado.innerHTML = '';
    //limpa o q tá na tela

    const p = criaP();
    //colocamos a função p na variável

    if (isValid) {
        p.classList.add('paragrafo-resultado');
        //se for verdadeiro o fundo fica verde no css, se não a próxima é executada
    } else {
        p.classList.add('bad')
    }

    p.innerHTML=msg;
    //escreve na tela a msg
    resultado.appendChild(p);
    //adiciona o parágrafo à div resultado
    
}