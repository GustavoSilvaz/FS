function mostraHora() {
    let data = new Date();

    return data.toLocaleString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

setInterval(function () {
    console.log(mostraHora())
}, 1000);