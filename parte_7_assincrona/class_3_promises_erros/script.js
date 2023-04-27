let p = Promise.resolve(new Error("Não funcionou"));

console.log("Testo");

p.then (value => console.log(value))
 .catch (reason => console.log("Fail: "+ reason));


 // Forma de exibir que houve erro no codigo// quando ha erros em programação assincrona- 
 // eles não travam o codigo
 // Metodo catch pega o erro da promessa e pode ser usado 
