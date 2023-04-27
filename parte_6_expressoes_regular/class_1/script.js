const reg1 = new RegExp ('circulo');

console.log(reg1.test("are there any circulo hire?"));
console.log(reg1.test("Ou não?"));

const reg2 = /bola/;  

let text = 'Tem uma bola aqui?';

console.log(reg2.test("are there a bola a ?"));
console.log(reg2.test("theres not"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Are there a quadrado?"));
console.log(/quadrado/.test("1564684quadrado685"));

//usando a variavel instanciando "new RegExp"  da pra procurar uma determinada string
//independente da string estar misturada com outros cara caracteres ou não outro meio mais facil de usar é 
//   "/quadrado/" mais simples