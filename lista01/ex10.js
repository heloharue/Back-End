const readline = require ("readline-sync");
function contarLetra(texto, letra){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === letra){
            contador++;
        }
    }
    return contador;
}
let texto = readline.question("Digite o texto: ");
let letra = readline.question("Digite a letra que deseja contar: ");

console.log(`A letra ${letra} aparece ${contarLetra(texto, letra)} vezes`);