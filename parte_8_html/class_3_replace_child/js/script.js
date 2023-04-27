let novo_parag = document.createElement("p");
let texto = document.createTextNode("um paragrafo novo");

novo_parag.appendChild(texto);

let titulo_1 = document.querySelector("#titulo");
let sub_titulo = titulo_1.parentNode;

sub_titulo.replaceChild(novo_parag,titulo_1);


// replaceChild subistitui outra tag pelaa tag nova