class pessoa {
    constructor (nome,idade,filosofia){
        this.nome = nome;
        this.idade = idade;
        this.filosofia = filosofia
               
        }
            socar(){
            console.log("RAHHH");  
       }
    }

let arms = Symbol();    
pessoa.prototype [arms] = 2;

pessoa.prototype.sexo = "Não Binario";
pessoa.prototype.filosofia = "Fracassado";

const pessoa1 = new pessoa("Alefe",25,"Grow up until the top");
pessoa1.socar();
pessoa1.sexo = "Masculino";    

console.log(pessoa1);
console.log(pessoa1.sexo);

console.log(pessoa.prototype.filosofia);
console.log(pessoa.prototype.sexo);

//Calling for method Symbol
//Symbol tras atribut que não pode ser alterado 
console.log(pessoa.prototype[arms]);






//Basic you can give the original atribute off the class a value using "prototype as a method ";.  
//Ao acessar propriedades pelo objeto original sempre "sera necessario ultilizar o metodo prototype";.