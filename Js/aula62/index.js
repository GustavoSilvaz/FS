function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        falar(){
            console.log(`${this.nome} Está falando`)
        },
        beber(){
            console.log(`${this.nome} Está bebendo`)
        },
        comer(){
            console.log(`${this.nome} Está comendo`)
        }
    };
    return Object.create(pessoaPrototype, { 
        nome: {value: nome},
        sobrenome: {value: sobrenome}
        });
}

const p1 = criaPessoa("Luiz", "Otávio");
console.log(p1)