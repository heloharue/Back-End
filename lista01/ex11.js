function podeVotar(idade) {
  return idade >= 16;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Digite a idade: ', answer => {
  const idade = Number(answer);
  if (Number.isNaN(idade)) {
    console.log('Idade inválida.');
  } else {
    console.log(podeVotar(idade) ? 'Pode votar.' : 'Não pode votar.');
  }
  readline.close();
})