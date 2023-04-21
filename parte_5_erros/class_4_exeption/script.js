'use restrict'
function saudation (nome){
  if (typeof nome != 'string'){
    throw new Error (" o parametro precisa ser string");
  }else {
    console.log(`Ola ${nome}.`);
  }
}

saudation("Alefe");
saudation(554);

console.log("Teste");


//throw diz que ira jogar uma mensagem de erro caso a condição seja verdadeira  
//mensagem de erro cancela o resto das linhas abaixo