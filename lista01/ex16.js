const alunos = [
  { nome: "Tadeu", nota: 8.2 },
  { nome: "Matheus", nota: 6.3 },
  { nome: "Manu", nota: 7.8 },
  { nome: "Duda", nota: 10.0 },
  { nome: "Victor", nota: 5.7 }
];

const boletim = alunos.map(aluno => ({
  ...aluno,
  situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));


const aprovados = boletim.filter(aluno => aluno.situacao === "Aprovado");

const mediaGeral = alunos.reduce((acc, aluno) => acc + aluno.nota, 0) / alunos.length;

console.log("Boletim da Turma:");
console.log(boletim);
console.log(`\nTotal de aprovados: ${aprovados.length}`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
