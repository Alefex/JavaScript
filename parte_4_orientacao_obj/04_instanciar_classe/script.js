function born_people(nome,pele,peso,sexo){
    let people = Object.create({});
    people.nome = nome;
    people.pele = pele;
    people.peso = peso;
    people.sexo = sexo;
    return people;
}

const people_1 = born_people("Alefe","Pardo","60k");


console.log(people_1);
people_1.sexo = "Não Binario";


//Outro meio de criar copias do objeto só que mais pratico talvez que primeiro
//.....