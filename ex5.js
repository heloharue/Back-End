const input = require("readline-sync");

let par = 0;
let impar = 0;

for(let i=0; i<10; i++){
    let num = input.question("digite o primeito numero: ");

    if(num % 2 === 0){
        console.log("o numero é par" , par);
    }else{
        console.log("o numero é impar");
    }
}
