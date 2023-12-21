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