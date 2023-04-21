 class e_commerce {
     constructor (itens,qtd,valor){
        this.itens = itens; 
        this.qtd = qtd;
        this.valor = valor;
     }
     
     add_item(item){
        let contador = 0;

        for(let item_carrinho in this.itens){
            if(this.itens[item_carrinho].id==   item.id){
                this.itens[item_carrinho].qtd += item.qtd;
            contador = 1;
            }
               
        }
        if (contador == 0){
                this.itens.push(item);
            }


        this.qtd += item.qtd;
        this.valor += item.preco * item.qtd;
     }
     remove_item(item){

        for(let item_carrinho in this.itens){
            if(this.itens[item_carrinho].id == item.id){
            
            let obj =this.itens [item_carrinho];
            
            let index = this.itens.findIndex(function(obj){return obj.id == item.id});
              
            this.qtd -= this.itens[item_carrinho].qtd;
            this.valor -= this.itens[item_carrinho].preco * this.itens[item_carrinho].qtd;
            this.itens.splice(index,1);        
    }
        }
    }   
}
    let carrinho = new e_commerce ([{
        id:01,
        nome:"Fone de Ouvido",
        qtd:3,
        preco:100
    },{
        id:02,
        nome:"Tenis",
        qtd:1,
        preco:80
    }],4,180);

    console.log(carrinho);
    carrinho.add_item({id:02,nome:"Tenis",qtd:4,preco:80});
    console.log(carrinho);
    
    carrinho.add_item({id: 03 , nome: "calcinha" ,qtd: 1 , preco: 20});
    console.log(carrinho);
    carrinho.remove_item({id:03,nome:"calcinha",qtd:2,preco:20 });
    console.log(carrinho);