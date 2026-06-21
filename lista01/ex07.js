let soma = 0;

for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        soma += i;
    }
}

console.log(`A soma dos numeros de 1 atee 50 e: ${soma}`);