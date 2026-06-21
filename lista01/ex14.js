const readline = require ("readline");


const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverter(array){
  let novoArray = [];

  for(let i = array.length - 1; i >= 0; i--){
    novoArray.push(array[i]);
  }
  return novoArray;
}

r1.question("Digite os numeros:", (numeros) =>{
  console.log(reverter(numeros.split(" ").map(Number)));
  r1.close();
})
