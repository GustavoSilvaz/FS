const alunos = ['Gustavo','gay','mt gay'];

alunos[0]='Lucas';
alunos[3]='Luiza';

//alunos[alunos.length]='Fabio';
alunos.push("Matheus");

alunos.unshift("Fábio");

let removido = alunos.pop()
//remove o último

let removido2 = alunos.shift()
//remove o primeiro


console.log(alunos.slice(0, -2))

console.log(typeof alunos)

console.log(alunos instanceof Array)