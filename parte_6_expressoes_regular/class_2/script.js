const reg1 = /[654321]/;

console.log(reg1.test("do we have the number 6?"));
console.log(reg1.test("do we have the number 67?"));
console.log(reg1.test("do we have the number 7?"));
console.log(reg1.test("do we have the number 70?"));

let reg2 = /[0-9]/;

console.log(reg2.test("Do we have the numer 90"));


// Basic here we can search for numbers or validate those