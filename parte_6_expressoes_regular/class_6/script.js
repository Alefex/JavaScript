const cep = /\d{5}-\d{3}/;

console.log(cep.test("88885-987"));
console.log(cep.test("asd"));
console.log(cep.test("881-98"));
console.log(cep.test("99999-999"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("asd"));
console.log(tel.test("(11)12365-4886"));
console.log(tel.test("(11)1236-4886"));


// forma de validar cep e telefone 


const digitar = /\d+/;