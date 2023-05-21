let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

 function msg(){
     console.log("Clickou")
 }
 btn1.addEventListener("click",msg);



// nesse metodo de evento nao é possivel removelo depois 
// btn1.addEventListener("click",() => {
//     console.log("Clickou!");
// });

// Evento de exibir mensagem ao clicar no botão
//para remover um evento é preciso usar-- 
//uma função que chama a mensagem do evento

btn2.addEventListener("click",function(){
    btn1.removeEventListener("click",msg);
});

//evento de remover usando o botão 2 ao clicar nesse botão o evento do-
//botão 1 não funciona mais 