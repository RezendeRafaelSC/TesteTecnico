const FaturamentoMensal = require("./faturamento.json");

const faturamentos = FaturamentoMensal.faturamentos;

// Ponto 1 - Menor Valor
const menorValor = Math.min(...faturamentos.map((item) => item.valor));
console.log(` O menor valor do faturamento do mes: ${menorValor}`);

// Para complementar o ponto 1, busca a data do menor valor
const menorValorData = faturamentos.find(
  (item) => item.valor === menorValor
).data;
console.log(`Data do menor valor: ${menorValorData}\n`);

// Ponto 2 - Maior Valor
const maiorValor = Math.max(...faturamentos.map((item) => item.valor));
console.log(`O maior valor do faturamento do mes: ${maiorValor}`);

// Para complementar o ponto 2, busca a data do maior valor
const maiorValorData = faturamentos.find(
  (item) => item.valor === maiorValor
).data;
console.log(`Data do maior valor: ${maiorValorData}\n`);

// Ponto 3 - Calcular a média dos valores para então depois procurar quais foram os dias que foram superiores a esse valor.
const mediaValor =
  faturamentos.reduce((acc, item) => acc + item.valor, 0) / faturamentos.length;
console.log(`A media de valor: ${mediaValor.toFixed(2)}\n`);

//Com a média calculada, posso utilizar a função filter para procurar os dias que foram superiores a ela.
const diasSuperiores = faturamentos.filter((item) => item.valor > mediaValor);
console.log(`Dias superiores a media: ${diasSuperiores.length}`);
