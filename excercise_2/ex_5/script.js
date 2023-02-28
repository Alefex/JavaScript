alert ("VELOCIDADE MAXIMA PERMITIDA 80K");
let vel = prompt("Velocidade:");

if (vel==80){
    console.log("Your speed is at a limit.");
}else  if(vel<80){
    console.log("Your speed is low to the alow.");
}else {
    console.log("Your speed is above the alow, we going to send a tax");
}