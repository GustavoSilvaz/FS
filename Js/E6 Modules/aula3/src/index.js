/* Tem como renomear na própria importação
import { nome as nome2, sobrenome as sla, idade, soma } from './modulo1' */
/* import { nome, sobrenome, idade, soma, Pessoa } from './modulo1' */
/* importa tudo de uma vez que tiver com export antes da variável
import * as MeuModulo from './modulo1'; 
*/

import qualquerNome from './modulo1';

/* const p1 = new Pessoa("Luiz", "Otavio")

console.log(nome, nome, sobrenome, idade , soma(2,3))
console.log(p1) */

console.log(qualquerNome(2,3))