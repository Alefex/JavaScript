let nome = "alphonse";

for ( i=0; i<33; i = i+1){
    console.log(nome);
    if (i==3){
    nome = "Eric";
    console.log(nome);
    }  
       if(i==19){
        nome="Alefe";
       }
          if(i==20 && nome == "Alefe"){
           console.log("Achei o nome que queria pare.");
           break; 
          }  
    console.log(i);
}
