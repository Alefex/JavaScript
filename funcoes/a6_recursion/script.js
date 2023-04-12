function recursao(n){

    if (n -1 < 2){
        console.log("Recursão parou! "+n);

    }else if (n % 2 !=0){
        console.log("Número Ímpar! "+n);
        recursao (n-1)
    }else {
        console.log("Número par! "+n );
        recursao(n-2)
}
}

recursao(0);
recursao(11);
recursao(15);