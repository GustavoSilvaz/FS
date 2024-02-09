class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume=0;
    }
    aumentarvolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    static trocaPilha(x,y) {
    console.log("Ok, vou trocar!")
    }

    static soma (x, y) {
        return x + y;
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarvolume();
console.log(controle);

ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(5,5))

function teste(x, y) {
    return x + y;
}

console.log(teste(3,4));

