const digitar = /\d+/;

console.log(digitar.exec("Estou testando ."));
console.log(digitar.exec("Estou testando2131241242        ."));
console.log(digitar.exec("11231245"));
console.log(digitar.exec(" "));


const sentence = "The number 100 are hire".match(/\d+/);
const sentence2 = " 100" .match(/\d+/);

console.log(sentence);
console.log(sentence2);


//fazem a mesma coisa mas com codigo escrito diferente