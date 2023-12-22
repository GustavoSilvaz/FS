// ? :

const pontuacaoUser = 999;
const nivelUser = pontuacaoUser >=1000 ? "Usuário vip" : "Usuário normal,";

const corUsuario = null;
const corPadrao = corUsuario || 'preta';
console.log(nivelUser, 'cor',corPadrao)

//if (pontuacaoUser >= 1000)
//    console.log("Usuário é um Jedi");
//else if(pontuacaoUser <=999 ) {
//    console.log("Usuário é um Sith")
//}