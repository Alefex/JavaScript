async function sum( a,b ){
    return a+b;
}

console.log(sum(5,5));

sum(5,5).then (value => console.log(value));


// resolve se transfor mando numa "Promise " /utilizando o resolve que retorna a resolução -
// e reject quando da erro / 