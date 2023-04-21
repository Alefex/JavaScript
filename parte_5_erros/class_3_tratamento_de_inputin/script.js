function checar_numero (num){
  let number = Number (num);
  if(Number.isNaN(number)){
    alert ("Please just use numbers on the program!");
  }else {
    return number;
  }     
}

checar_numero("fasc");
checar_numero(10);

let number = prompt ("Say a number:");

checar_numero(number);


//validação de dados se for numero ele não da erro se não for exibe mensagem de erro