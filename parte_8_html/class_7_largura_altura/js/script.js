let elemento = document.querySelector("#titulo");

console.log("largura:" + elemento.offsetWidth);
console.log("altura:" + elemento.offsetHeight);


console.log("largura:" + elemento.clientWidth);
console.log("altura:" + elemento.clientHeight);


//offset conta altura e largura sem bordas e client conta elas com uma borda

console.log(elemento.getBoundingClientRect());


//metodo usado para saber as informações de algum elemento
//altura largura posição cima baixo esquerda direita etc.