let pessoa = {
  nome:"Alefe",
}

let pessoa2 = pessoa;

let pessoa3 = {
  nome:"Simoni"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Shirou";

console.log(pessoa);


pessoa.nome = "Kotaroul";

console.log(pessoa2);