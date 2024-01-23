function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function nome (callback) {
    setTimeout(function(){
        console.log('Gustavo')
        if (callback) callback();
    }, rand());
}

function nome2 (callback) {
    setTimeout(function(){
        console.log('Gustavo1')
        if (callback) callback();
    }, rand());
}

function nome3 (callback) {
    setTimeout(function(){
        console.log('Gustavo2')
        if (callback) callback();
    }, rand());
}
/* 
nome(function(){
    nome2(function(){
        nome3(function(){
            console.log("Olá, mundo!")
        });
    });
}); */

