function* testo_gen (){
    let id = 0;
    while (true){
        yield id ++;
    }
}

let usando_gen = testo_gen();

console.log(usando_gen.next().value);
console.log(usando_gen.next().value);
console.log(usando_gen.next().value);

console.log(usando_gen.next());


//armazena um valor na memoria podend ser chamado pela funcao e usand o next acrescentar o valor 
// e ser exibido somente o valor por vez 