const h1 = document.querySelector(".container h1");
const data = new Date();

//pega o container e a Date


function getDiaSemanaTexto (diaSemana) {
    let  diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto="Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto="Segunda";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto="Terça";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto="Quarta";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto="Quinta";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto="Sexta";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto="Sábado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto="";
            return diaSemanaTexto;
    }
}

function getNomeMes (numeromes) {
    let  nomeMes;

    switch (numeromes) {
        case 0:
            nomeMes="janeiro";
            return nomeMes;
        case 1:
            nomeMes="Fevereiro";
            return nomeMes;
        case 2:
            nomeMes="Março";
            return nomeMes;
        case 3:
            nomeMes="Abril";
            return nomeMes;
        case 4:
            nomeMes="Maio";
            return nomeMes;
        case 5:
            nomeMes="Junho";
            return nomeMes;
        case 6:
            nomeMes="julho";
            return nomeMes;
        case 7:
            nomeMes="agosto";
            return nomeMes;
        case 8:
            nomeMes="setembro";
            return nomeMes;
        case 9:
            nomeMes="outubro";
            return nomeMes;
        case 10:
            nomeMes="novembro";
            return nomeMes;
        case 11:
            nomeMes="dezembro";
            return nomeMes;
        
        
        default:
            nomeMes="";
            return nomeMes;
    }
}

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
    const diaSemana= data.getDay();
    const numeromes=data.getMonth();

    const nomeDia=getDiaSemanaTexto(diaSemana);
    const nomeMes=getNomeMes(numeromes);

    return ( 
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()}` + 
    `, ${zeroAesquerda(data.getHours())}:${zeroAesquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data);