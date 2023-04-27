const numinf = /\d+/;

console.log(numinf.test("131421412"));
console.log(numinf.test(""));
console.log(numinf.test("sfafasf"));

const num_1_letra = /\d+\w?/;

console.log(num_1_letra.test("4156464"));
console.log(num_1_letra.test("564612adsafasf "));
console.log(num_1_letra.test("4564564w"));

const optional = /caix?a/;
// torna a letra antes da interrogação opcional no caso o valor

console.log(optional.test("caia"));