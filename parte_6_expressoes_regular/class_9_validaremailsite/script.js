const site = /[?www.]\w+\.com.br|.com/;

console.log(site.test("www.walmart.com.br"));
console.log(site.test("www.google.com"));
console.log(site.test("horadoduelo.com"));

// Validando Emails 

const emai = /\w+@\w+\.\w+/;

console.log(emai.test("alefeptito@gmail.com"));
console.log(emai.test("alefeptitogmail.com"));
console.log(emai.test("alefeptito@gmail"));
console.log(emai.test("gmail@gmail.gmail.com"));

//validação de email "burlaveL" mais ou menos 


const vali_nasci = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/; 

console.log(vali_nasci.test('05/11/1987'));
console.log(vali_nasci.test("4/6/12"));
console.log(vali_nasci.test("41/66/9999"));


//Validando data de nascimento 