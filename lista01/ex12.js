
const readline = require ("readline-sync");
function calcular(a, b, operacao) {
  return operacao(a, b);
}

let n1 = Number(readline.question("digite o primeiro numero:"));
let n2 = Number(readline.question("digite o segundo numero:"));

console.log("Soma:", calcular(n1, n2, (a, b) => a + b));
console.log("Subtração:", calcular(n1, n2, (a, b) => a - b));
console.log("Multiplicação:", calcular(n1, n2, (a, b) => a * b));
