class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;

    }

    ligar () {
        if(this.ligado) {
            console.log(this.nome + " já ligado")
            return;
        }
        this.ligado = true;
    }
    
    desligar () {
        if(this.desligado) {
            console.log(this.nome + " já desligado")
            return;
        }
        this.desligado = false;
    }
    }


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, wifi){
        super(nome);
        this.wifi = wifi;
    }
    ligar () {
        console.log("Você alterou o método ligar")
    }
}
const t1 = new Tablet("Ipad",true);
const s1 = new Smartphone('Iphone','midnight','I15');
s1.ligar();
console.log(s1)
t1.ligar();
console.log(t1)