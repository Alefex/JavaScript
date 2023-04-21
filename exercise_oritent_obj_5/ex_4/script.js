 class carro{
    constructor(marca,cor,gasolina_restante){
        this.marca = marca;
        this.cor = cor;
        this.gasolina_restante = gasolina_restante;
    }
    carro_andou_25k (){
        if (this.gasolina_restante >= 5.00){
            this.gasolina_restante = this.gasolina_restante - 5.00;
            console.log("O carro andou 25 Km");
            console.log(carro_andando);
        }
    }
        carro_andou_50k (){
            if (this.gasolina_restante >= 10.00){
                this.gasolina_restante = this.gasolina_restante - 10.00;
                console.log("O carro andou 50 Km");
                console.log(carro_andando);
            }
    }
        abastescer_carro(gasolina){
            this.gasolina_restante += gasolina;
            console.log("Você abasteceu "+ gasolina +" Litros de Gasolina");
        }
}


 let carro_andando = new carro ("Ferrai","Preto",10.00);
 console.log(carro_andando);

 carro_andando.carro_andou_25k();

 carro_andando.abastescer_carro(10.00);

 console.log(carro_andando);

 carro_andando.carro_andou_50k();

 carro_andando.carro_andou_25k();

 carro_andando.abastescer_carro(20.00);