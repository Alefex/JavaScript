
let p = Promise.resolve(10);

console.log("Outra coisa");

console.log(p);

p.then((value) => { return value +5})
 .then((value) => { console.log(value)});


 //promise pode ser resolvida em qualquer momento do codigo
 // metodo then pega o valor e armazena no "value" para ser ultilizado 