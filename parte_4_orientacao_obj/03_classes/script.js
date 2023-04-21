let cao = {
patas:4,
raca:'NDF',
nome:'NDF',
latir:function(){
    console.log("Wov Wov");
}    
}

const luck = Object.create(cao);

luck.nome = "Luck";
luck.latir();

console.log(luck.nome);
console.log(cao.nome);

const mini_golden = Object.create(luck);

//mini_golden.nome = "Atreus";

console.log(cao.nome);
console.log(luck.nome);
console.log(mini_golden.nome);





//Object.create(); atribuir uma variavel a um objeto usando este metodo transforma a variavel numa copia
//do objeto assim podendo alterar livremente a copia sem alterar em nada na original que foi atribuida apartir do metodo 
//com objeto