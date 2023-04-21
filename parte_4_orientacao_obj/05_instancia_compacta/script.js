function coder (nome,idade,conhecimento,salario){
    this.nome = nome;
    this.conhecimento = conhecimento;
    this.idade = idade;
    this.salario = salario;
}

coder.prototype.push_up = function() {
    console.log("UHhhhn");
}


const coder1 = new coder("Alefe",25,'Avançado');

console.log(coder1);

coder1.push_up();

// Resuming it is another wey to copy an object.
// A wey more compact
// Correct forme to make a function is atrelating to prototype
//auto of the function - object