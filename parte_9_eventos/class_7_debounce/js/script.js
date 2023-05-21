let timeout;

window.addEventListener("mousemove", function(e){
    clearTimeout(timeout);
    timeout = this.setTimeout(function (){
        console.log(e.x);
    },500);
}); 

// como dar intervalo em eventos infinitos 
// forma com gambiarra provavelmente 