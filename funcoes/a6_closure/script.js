function rememberSum (x){
    return function (c){
    return c + x;
}
}

let soma = rememberSum(5);

console.log(soma(10));

let soma2 = rememberSum(100);

console.log(soma2(20));

function contar (p){
    let contar = p;
    let contadorOrig = function() {
        console.log(contar);
        contar ++;
    }
    return contadorOrig;
}


let acresentar = contar(2);

acresentar();
acresentar();
acresentar();
acresentar();
acresentar();
acresentar();

