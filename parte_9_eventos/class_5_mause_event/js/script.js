let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown",function (){
    console.log("Clicou ");
});

btn1.addEventListener("mouseup",function(){
    console.log("soultou click");
});

btn1.addEventListener("dbclick", function(){
    console.log("Clicou duas vezes ");
});

btn2.addEventListener("contextmenu",function(e) {
    e.preventDefault();
    console.log("clicou com botão direito");

});

//evento ao clicar e soutar o click do mause e botão direito

// window.addEventListener("mousemove", function(e) {
//     console.log(e.x);
//     console.log(e.y);
// });

// evento que mostra as cordenadas do mouse ao movelo

window.addEventListener("scroll", function(e) {
    if (this.window.pageYOffset > 1000){
        console.log("Rolou a pagina");

    }
})

//evento de descer a pagina