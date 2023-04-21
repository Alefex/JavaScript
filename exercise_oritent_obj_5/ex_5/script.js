 class conta_bancaria{
    constructor(saldo_conta_corrente,saldo_conta_poupanca,juros_poupanca){
        this.saldo_conta_corrente = saldo_conta_corrente;
        this.saldo_conta_poupanca = saldo_conta_poupanca;
        this.juros_poupanca = juros_poupanca;
     }
     saque_corrente(saque_c){
         this.saldo_conta_corrente = this.saldo_conta_corrente - saque_c;
         //console.log("Saldo da conta corrente é "+this.saldo_conta_corrente);
        }
     deposito_corrente(deposito_c){
        this.saldo_conta_corrente = this.saldo_conta_corrente + deposito_c;
        console.log("Saldo da conta corrente é "+this.saldo_conta_corrente);
     }
    transferir_para_corrente(valor_transferir_c){
        this.saldo_conta_poupanca -= valor_transferir_c;
        this.saldo_conta_corrente += valor_transferir_c;
    }   
    transferir_para_poupanca(valor_transferir_p){
        this.saldo_conta_corrente -= valor_transferir_p;
        this.saldo_conta_poupanca += valor_transferir_p;
    }
    
    juros(){
        this.saldo_conta_poupanca += this.juros_poupanca;
    }

}
 class conta_bancaria2 extends conta_bancaria {
         constructor(saldo_conta_corrente,saldo_conta_poupanca,juros_poupanca){
             super(saldo_conta_corrente,saldo_conta_poupanca,juros_poupanca*2);
         }
     }
    

 let usuario_conta = new conta_bancaria (1000,5000,50);
console.log (usuario_conta);

usuario_conta.saque_corrente(200);
console.log(usuario_conta);

usuario_conta.deposito_corrente(300);
usuario_conta.transferir_para_corrente(1000);
console.log(usuario_conta);

let usuario_conta2 = new conta_bancaria2 (100,1000,50);

console.log(usuario_conta2);
usuario_conta2.deposito_corrente(100);
console.log(usuario_conta2);
usuario_conta2.transferir_para_corrente(500);
console.log(usuario_conta2);
usuario_conta2.juros();
console.log(usuario_conta2);

//conta bancaria deposita, saca dinheiro, transfere da polapança para a conta corrente e vice versa
//juros Que deposita 5% do salario na conta poupança e segunda conta com juros dobrado