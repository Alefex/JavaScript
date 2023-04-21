 class endereco {
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    //atualizar(){
    //let att = new endereco ("Alberto Bighton","Vila Maria Alta","Rio Branco","Acre");
    //console.log(att);
    //}

    set atualizar_rua(atualizar_rua){
    this.rua = atualizar_rua;
    }
    set atualizar_bairro(atualizar_bairro){
        this.bairro = atualizar_bairro;
     }
     
    set atualizar_cidade(atualizar_cidade){
        this.cidade = atualizar_cidade;
     }
     set atualizar_estado(atualizar_estado){
         this.estado = atualizar_estado;
      }
 }

 let att_rua = new endereco("ND","ND","ND","ND");

 att_rua.atualizar_rua = "Alberto Bighton";
console.log(att_rua);

att_rua.atualizar_bairro = "Vila Maria Alta";
console.log(att_rua);

att_rua.atualizar_cidade = "Rio Branco";
console.log(att_rua);

att_rua.atualizar_estado = "AC";
console.log(att_rua);