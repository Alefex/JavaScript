class cachorro {
    constructor (raca,cor){
       this.raca = raca;
       this.cor = cor;
    }
    latir(){
        console.log("WOV WOV");
    }
    get get_cor(){
    return this.cor;
}
    set set_cor(cor){
        this.cor = cor;
    }
    
        }
   
        let pudou = new cachorro ("Pudou","Unknow");

        console.log(pudou);
        
        pudou.set_cor = "Yellow";

        console.log(pudou.get_cor);


        //De algum jeito o set atribui o valor do atributo e o Get recebe e exibe o valor atribuido 