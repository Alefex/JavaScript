let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector('p');
    function msg (e){
        console.log(e);
        e.stopPropagation();
   // stopPropagation impede dois eventos que estão um dentro do outro --
   //no html de executarem ao mesmo tempo ao clicar em algum dos dois 
     }
   
    btn1.addEventListener("click",msg);

    btn2.addEventListener("click",function(event){
        console.log(event);
    });

    p.addEventListener("click",function(){
        console.log("clicou no P de paragrafo");
    });

