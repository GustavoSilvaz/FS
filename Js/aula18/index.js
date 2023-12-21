const hora = 17;
const gustavo = true;

if (gustavo) {
    console.log("Olá meu rei.")
} else {
    console.log("Você não é o meu lord.")
}

if (hora>= 0 && hora <= 11) {
         console.log("Buenos días");
} else if (hora>= 12 && hora <=17) {
    console.log("Buenas tardes")
} else if (hora >=18 && hora <= 23) {
    console.log ("Buenas noches")
} else {
    console.log("Horario no válido");
}

const numero = 7;

if (numero>=0 && numero <=5) {
    console.log("O número é maior ou igual a cinco");
} else if (numero===numero) {
    console.log("O número é aaaa")
}  else if (numero>6) {
    console.log("O número é verdadeiro")
} else {
    console.log("O número não está na lista")
}