let cao = {
    nome:"Luck"
}

console.log(Object.getPrototypeOf(cao));
console.log(Object.getPrototypeOf(cao)===Object.prototype);

console.log(cao.hasOwnProperty('nome'));

const novo_cao = Object.create(cao);

console.log(novo_cao.nome);

console.log(novo_cao.hasOwnProperty('nome'));
console.log(Object.getPrototypeOf(novo_cao) === cao);




//Ao criar um objeto e em seguida o metodo "object"
//OBJECT se torna pai do objeto em questao com isso é possivel ultilizar outros metodos como "hasOwnProperty"=
//que confirma se o objeto tem determinada propriedade no caso o nome .
//QUando objeto inicial é atribuido a outra variavel junto ao objeto pai declarado -
//Essa nova variavel ao inves de receber os valores tem seus atributos compartilhados       
//mas não contendo eles ;
//Em termos tecnicos o objeto pessoa se torna o prototype da variavel que o recebe junto ao objeto pai"