function somar_delay (a,b){
    return new Promise (resolve => {
        setTimeout  (function(){
            resolve(a+b);
            
        },4000)
    })
    
}

async function sum_again (a,b,c){
    let x = somar_delay (a,b);
    let y = c;

    return await x+y;
}

sum_again (1,5,5).then(value => console.log(value));


//AWAIT == é usado quando se precisa esperar outro resultado pra resolver o resultado chamado 
//no caso o await esta esperando o a+b da primeira função que usa promise resolver pra depois usar os ---
//valores a e b dele pra somar com o c na async function que recebe esses valores