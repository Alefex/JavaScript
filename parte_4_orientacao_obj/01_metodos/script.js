let cao = {
    latir: function (){
        console.log("Wooov Wov");
    },
    rosnar: function (){
        console.log("Rrrrrrrrrrrrrrrr");
    },
    raca:'none',
    set_raca:function(raca){
        this.raca = raca;
    },
    set_caracteristica: function (){
        return "Este é um cachorro danado!" + this.raca;
    }
}

cao.rosnar();
console.log(cao.raca);

cao.set_raca("Golden");

console.log(cao.raca);

console.log(cao.set_caracteristica());

