// class conta {
//     constructor(saldo,saque,deposito){
//         this.saldo = saldo;
//         this.saque = saque;
//         this.deposito = deposito;
//     }
//      saque_eq(){
//         return "Saldo é " + (this.saldo = this.saldo - this.saque);
//      }
//      deposito_eq(){
//         return "Saldo é " + (this.saldo = this.saldo + this.deposito);
//       }
// }

// let usu_1 = new conta(500,"nd","nd");

// console.log(usu_1.saldo);

// usu_1.saque = 200;
// console.log(usu_1.saque_eq());

// usu_1.saque = 200;
// console.log(usu_1.saque_eq());


// usu_1.deposito = 900;
// console.log(usu_1.deposito_eq());

class conta {
         constructor(saldo){
             this.saldo = saldo;
             
         }
          saque_eq(valor){
         this.saldo -= valor;
          }
          deposito_eq(valor){
         this.saldo += valor;
           }
     }
    
     let usu_1 = new conta(500);
    
     console.log(usu_1.saldo);
    
     usu_1.saque_eq(10);
     console.log( usu_1.saldo);

     usu_1.deposito_eq(1000);
     console.log( usu_1.saldo);