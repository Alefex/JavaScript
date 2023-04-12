let pessoa = {
    "nome":"Alefe",
    "age":20,
    "cnh":true,
    "Dínheiro":1000000,
    "powers":["Chidori","Clones"]
}
console.log(pessoa.Dínheiro);
console.log(pessoa.cnh);
console.log(pessoa.nome);
console.log(pessoa.age);

let pessoatext = JSON.stringify(pessoa);

console.log(pessoatext);    

let pessoaDeVolta = JSON.parse(pessoatext);    

console.log(pessoaDeVolta.powers[0]);

if (pessoa.Dínheiro>=999999){
    console.log(pessoa);
}




//Funciona do mesmo jeito que um objeto
//Não é um objeto pois não tem metodos so serve para entregar ou receber dados
//Da pra usar Arry dentro de objeto sem parametro 