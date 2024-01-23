function CriaPessoa (nome, sobrenome, a, p) {
    return {
        nome, sobrenome,
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome=valor.shift();
            console.log(valor);
        },

        fala (assunto) {
            return `${this.nome} etá falando ${assunto}`;
        },

        altura: a,
        peso: p,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = CriaPessoa('Luiz', "Otavio", 1.8, 80);
console.log(p1.nomeCompleto);
console.log(p1.imc);
