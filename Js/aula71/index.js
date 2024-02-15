function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

const promise = [
    'Primeiro valor',
    esperaAi("promise 1", 3000),
    esperaAi("promise 2", 500),
    esperaAi("promise 3", 1000),
    "Outro valor"
];

Promise.all(promise)
.then(function(valor) {
    console.log(valor);
}).catch(function(error) {
    console.log(error);
});