const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("24") && "24".length == 2);
console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asdz019") && "2019".length == 2);

const pelomenos_tres_letras = /\w\w\w/;

console.log(pelomenos_tres_letras.test("ghjyu"));
console.log(pelomenos_tres_letras.test("asd"));
console.log(pelomenos_tres_letras.test("a"));

// ^ nega os caracteres no caso nega a e b que estão sendo usados ou de a a z 
//caso haja numeros no meio ele sera 
//aceito como true mesmo que tenha algum caractere 
const com_not = /[^ab]/;    
const com_notll = /[^a-z]/;


console.log(com_not.test("a"));
console.log(com_not.test("a tem aqui "));
console.log(com_not.test("a"));

// triple W valida com 3 caractres double d valida 2 digitos de numero  o lenth no final especifica exatos 2 digitos não dois numeros   