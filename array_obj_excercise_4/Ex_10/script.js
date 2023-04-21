let calculadora = {
    soma:function (a,b){
        return a+b;
    },
    subtracao:function (a,b){
        return a-b;
    },
    multiplicacao:function (a,b){
        return a*b;
    },
    divisao:function (a,b){
        return a/b;
    }
}

console.log(calculadora.soma(10,10 ));
console.log(calculadora.subtracao(10,5));
console.log(calculadora.multiplicacao(10,10));
console.log(calculadora.divisao(20,2));

//Funcao dentro de um objeto pratica falada como metodo e objeto

// let calculadora = {
//     somar:[],
//     subtracao:[],
//     multiplicacao:[],
//     divisao:[]
// }

//     calculadora.somar.push(10+10);    
//     console.log(calculadora.somar);
    
//     calculadora.subtracao.push(20-10);
//     console.log(calculadora.subtracao);

//     calculadora.multiplicacao.push(5*5);
//     console.log(calculadora.multiplicacao);

//     calculadora.divisao.push(15/3);
//     console.log(calculadora.divisao);
    
    
    //console.log(calculadora.somar[+]);


