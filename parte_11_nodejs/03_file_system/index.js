let {readFile,writeFile} = require('fs');

readFile("arquivo.txt","utf8",(error, texto)=>{
if(error){
    throw error;
} else{
    console.log(texto);
}
});


//writeFile vai alterar um texto do arquivo de texto mencionado
writeFile("arquivo.txt", "Texto que mudou com write file", (error) =>{
    if (error){
        throw error;
    }else {
        console.log("Texto escrito com sucesso!");
    }
})