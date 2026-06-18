function range(inicio, fim) {
  const resultado = [];
  const passo = inicio <= fim ? 1 : -1;
  for (let i = inicio; passo > 0 ? i <= fim : i >= fim; i += passo) {
    resultado.push(i);
  }
  return resultado;
}

function soma(array) {
  let total = 0;
  for (const valor of array) {
    total += valor;
  }
  return total;
}

console.log(soma(range(1, 10)));