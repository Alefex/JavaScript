let elemento = document.querySelector("#titulo");

 elemento.style.color = 'purple';
 elemento.style.backgroundColor = 'blue';

 setTimeout(function (){
    elemento.style.color = 'blue';
    elemento.style.backgroundColor = 'red';
    elemento.style.borderColor = 'white'  
 },2000);


 // Alterando elementos do html pelo java script usando css

 let itens = document.querySelectorAll('.blue-iten');

 console.log(itens[0]);
 itens[0].style.color = 'blue';


 //forma de selecionar todos os elementos com o mesmo nome 
 //em uma variavel podendo alterar de forma que quiser 