let carro = {
  portas:4,
  volante:1,
  motor:"2.0",
}

let adicionais = {
tetoSolar:true,
arCondicionado:true,
}

console.log(carro);

Object.assign(carro,adicionais);

console.log(carro);