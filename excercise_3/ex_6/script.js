function datas (a){
    
    if (typeof a === "number"){
        console.log("is a number");
    }else if(typeof a === "string") {
        console.log("It's a String!");
    }else if (typeof a=== "boolean"){
        console.log("It's a Boolean");
    }

}
datas(5);
datas(1000);
datas("f2134141");
datas(true);