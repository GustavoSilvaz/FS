let num = prompt("Digite um número;");
num = Number(num)

document.body.innerHTML+=`<h1> Seu número é ${num} </h1>`;

document.body.innerHTML+=`<p> A raiz do seu número é ${Math.sqrt(num)} </p> </br>`;

document.body.innerHTML+=`<p> ${num} é inteiro? ${Number.isInteger(num)} </p> </br>`;

document.body.innerHTML+=`<p> ${num} é NaN? ${Number.isNaN(num)} </p> </br>`;

document.body.innerHTML+=`<p> Arredondado para baixo ${Math.floor(num)} </p> </br>`;

document.body.innerHTML+=`<p> Arredondado para cima ${Math.ceil(num)} </p> </br>`;

document.body.innerHTML+=`<p> Com duas casas decimais ${num.toFixed(2)} </p> </br>`;