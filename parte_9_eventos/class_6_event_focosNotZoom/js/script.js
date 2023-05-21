let input = document.querySelector("input");

input.addEventListener("focus", function(){
    console.log("Entrou na caixa de texto");
});

input.addEventListener("blur", function(){
    console.log("saiu do escopo de texto");
});

//evento ao clicar em uma caixa de texto e sair da caixa de texto 

// window.addEventListener("load",function(){
//     alert("Assino nosso site!");
// });

window.addEventListener("beforeunload", function(e) {
    event.returnValue = null;
});

// Ultimo codigo em caso de ter alterado a pagina de alguma forma-
// exibira uma mensagem se realmente deseja atualizar pois as alterações serão 
// perdidas