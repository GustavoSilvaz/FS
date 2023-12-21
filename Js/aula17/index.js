function formulario () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    //form.onsubmit = function (evento) {
    //    evento.preventDefault();
    //    alert(1)
    //    console.log("Enviado")
    //};

    function recebeEvento (evento) {
        evento.preventDefault();

        //console.log("Form, não foi enviado!")
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

       // function criaPessoa (nome, sobrenome, peso, altura) {
       //     return {
       //         nome: nome.value,
       //         sobrenome: sobrenome.value,
       //         peso: peso.value,
       //         altura: altura.value
       //     }
       // }

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value});

        //const pessoas = {
        //    nome: nome.value,
        //    sobrenome: sobrenome.value,
        //    peso: peso.value,
        //   altura: altura.value
        //}

        console.log(pessoas)
        
        resultado.innerHTML+=`<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEvento);
}

formulario();