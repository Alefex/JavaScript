let arr = [1,2,3,4,5,6];
let arr2 = [];

  function iterar_array(arr){
    if (arr.lenght == 0){
      throw new Error ("Array precisa ter algum elemento!");
    } else {
      for (let i = 0; i < arr.lenght; i++){
        console.log(i);
      }
    }
  }

   function array_vazio(arr){
  
    if (arr.lenght > 0){
       throw Error ("O array não pode ter elementos!");
     } else {
       console.log("Agora acertou");
     }
   }

  iterar_array(arr);
  iterar_array(arr);
  array_vazio(arr2);
  array_vazio(arr);