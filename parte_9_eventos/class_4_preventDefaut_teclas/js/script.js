let a = document.querySelector("a");

a.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Não acontece nada !")
})

//para de funcionar um evento como no caso o link para site externo  

window.addEventListener("keydown", function(e){
    if(e.key == 'q'){
        console.log("Apertou o q");
    } 
});

window.addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        console.log("Soltou Enter");
    }
}); 


//eventos de apertar teclas na hora de soltar e de apertar 