function MultiplicarTresNumeros(v,p,q){
    return v*p*q;
}
console.log(MultiplicarTresNumeros(5,6,2));


function PossoDirigir(age,wallet){
if (age>=18 && wallet == true){
    console.log("Able to drive");
}else{
    console.log("Not able to drive");
}
}

console.log (PossoDirigir(50,true));
console.log (PossoDirigir(17,false));
console.log (PossoDirigir(18,false));
console.log (PossoDirigir(19,true));



/*function QueroDirigir (ageT,walletT){
    switch (ageT, walletT){
        case ageT>=18 && walletT==true:
            console.log("Now you go drive");
            break;
        case ageT<18 && walletT==false:
            console.log("Please do not go drive");
            break;
        default:
            console.log("Just don't drive");
         
    }
}

console.log(QueroDirigir (10,false));
console.log(QueroDirigir (18,true));
console.log(QueroDirigir (50,false));*/