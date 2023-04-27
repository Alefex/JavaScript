const p1 = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve(50);    
    }, 10000);
});

const p2 = Promise.resolve(50);

const p3 = new Promise((resolve, reject) => {
        resolve(30);
});


Promise.all([p1,p2,p3]).then((values) => console.log(values));

//Executa os 3 p variaveis no tempo que a primeira é setada