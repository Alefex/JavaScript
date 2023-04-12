let valo = 1;
let valo1s = 5;
let valo2 = 11;
let valo3 = 6;
let valo4 = 2;
let valo5 = 12;

function juntandoArgs (...args){
    for (let i = 0;i<=args.length;i++){

        console.log(args[i]);
    }
}

juntandoArgs(valo,valo1s,valo2);
juntandoArgs(2,1,5,6,5);




//imprimir diversos valores em forma de array separados