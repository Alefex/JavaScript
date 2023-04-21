class mamifero {
    constructor (raca,cor){
       this.raca = raca;
       this.cor = cor;
    }
    
}

let baleia = new mamifero("Orca","Grey");

console.log(baleia.cor);

class leao extends mamifero{
    constructor(raca,cor,genero){
        super(raca,raca);
        this.cor = cor;
        this.genero = genero;   
    }
    rugir(){
        console.log("ROOOOOHAAAAAAAAAAAAAARR");
    }
} 

let leao_grande = new leao("Orca","Dourado","Macho");

console.log(leao_grande);
leao_grande.rugir();
leao.prototype.rugir();

console.log(leao_grande instanceof leao);
console.log(leao_grande instanceof mamifero);
console.log(baleia instanceof mamifero);
console.log(new leao instanceof mamifero);


//Pensar a respeito
//console.log(leao);    


//Basicamente o Extends cria outro objeto classe do zero baseado no original ou no que for escolhido pelo programador 
//podendo alterar os atributos originais pelo "super"
//"stanceof" é um validador entre aspas uma versao bizzarra do "typeOF"