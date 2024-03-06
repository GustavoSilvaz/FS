/* const mod1 = require('./mod1')
const falanome = mod1.falanome; */
/* const { nome, sobrenome, falanome} = require('./mod1');
console.log(nome, sobrenome)
console.log(falanome())
 */

const path = require('path')
const axios = require('axios')
const {Pessoa} = require('./mod1');
const p1 = new Pessoa("Luiz");
console.log(p1) g