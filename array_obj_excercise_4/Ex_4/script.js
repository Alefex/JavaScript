let bus = {
    portas:2,
    lim_pasag:40,
    rodas:8
}

console.log("Portas: " + bus.portas);
console.log("Limite de Passageiros: " + bus.lim_pasag);
console.log("Rodas:" + bus.rodas);

delete bus.rodas;
console.log("Rodas:" + bus.rodas);

bus.windows = 20;

console.log("Janelas: " + bus.windows)