const produto = {nome: 'Produto', preco:1.8};
/* const caneca = Object.assign({},produto, {material: 'porcelana'});

caneca.nome = 'Luiz Otávio';
caneca.produto = 2.5;
console.log(produto)
console.log(caneca)
 */
Object.defineProperty(produto, 'nome', {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))