const produtos = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Teclado Mecânico", preco: 350 },
  { id: 4, nome: "Monitor 27\"", preco: 800 },
  { id: 5, nome: "Webcam", preco: 150 }
];

const produtoId3 = produtos.find(p => p.id === 3);
console.log(produtoId3);

const produtosCaros = produtos.filter(p => p.preco > 100);
console.log(produtosCaros);

const nomes = produtos.map(p => p.nome);
console.log(nomes);

produtos.forEach(p => {
  console.log(`ID: ${p.id} | Nome: ${p.nome} | Preço: R$ ${p.preco.toFixed(2)}`);
});
