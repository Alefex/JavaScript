const reg1 = /./; // This accept evrything literali

console.log(reg1.test("faipca"));
console.log(reg1.test(" "));
console.log(reg1.test("213"));
console.log(reg1.test("faipca312"));



const dRegex2 = /\d/;  // same as this /[0-9]/

console.log(dRegex2.test("faipca"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("321"));
console.log(dRegex2.test("faipca3213"));

const dRegex3 = /\D/; // em suma reverte o d minusculo antes só se tivesse numeros agora não pode ter numeros

console.log(dRegex3.test("faipca"));
console.log(dRegex3.test(" "));
console.log(dRegex3.test("321"));
console.log(dRegex3.test("faipca3213"));

const dRegex4 = /\s/; // só aceita espaços tabs and line broke 

console.log(dRegex4.test("faipca"));
console.log(dRegex4.test(" "));
console.log(dRegex4.test("321"));
console.log(dRegex4.test("faipca3213"));

const dRegex5 = /\w/; //só aceita letras e numeros 

console.log(dRegex5.test("faipca"));
console.log(dRegex5.test(" "));
console.log(dRegex5.test("321"));
console.log(dRegex5.test("faipca3213"));



//OBS: caracteres Upper Keys = Maiusculo ara the contrary of the Lower Keys = Minusculo