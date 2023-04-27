function olhar_numero(num){
return new Promise((resolve,reject) =>{
    if (num == 2){
        resolve(console.log(`O numero é ${num}`));
    }  else {
        reject(new Error ("Failure"));    
        }
    
});
}

olhar_numero(2);
olhar_numero(5);

// caso if chege no reject exibira mensagem de erro vermelha c