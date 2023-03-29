let num = 108;
let divisor = 0;

for (i = 1; i <= num; i++){
    if (num % i ==0){
        divisor ++;
    }
}

if (divisor == 2){
    console.log(`The number ${num} it's primo or cousin`);
}else {
    console.log(`The number ${num} isin't primo or cousin`);
}