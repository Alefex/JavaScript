let novo_parag = document.createElement("p");
let texto = document.createTextNode("um paragrafo novo");

novo_parag.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;


let elem_alvo = document.querySelector("#titulo");
let o_pai = document.querySelector("#container-principal");  

o_pai.insertBefore(novo_parag,elem_alvo);

pai.appendChild(novo_parag);

// appendChild esta jogando um conteudo para um paragrafo 
// createElement cria um paragrafo ao criar um paragrafo é preciso inserilo no html nesse metodo ultiliza duas ---
// outras variaveis para localizar e inserir entre as tags especificas