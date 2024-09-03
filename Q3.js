const FaturamentoMensal = require("./dados.json");

const faturamentos = FaturamentoMensal.faturamentos;

// Ponto 1 - Menor Valor
const menorValor = Math.min(...faturamentos.map((item) => item.valor));
console.log(` O menor valor do faturamento do documento: ${menorValor}`);

// Para complementar o ponto 1, busca a dia do menor valor
const menorValordia = faturamentos.find(
  (item) => item.valor === menorValor
).dia;
console.log(`dia do menor valor: ${menorValordia}\n`);

// Ponto 2 - Maior Valor
const maiorValor = Math.max(...faturamentos.map((item) => item.valor));
console.log(`O maior valor do faturamento do documento: ${maiorValor}`);

// Para complementar o ponto 2, busca a dia do maior valor
const maiorValordia = faturamentos.find(
  (item) => item.valor === maiorValor
).dia;
console.log(`dia do maior valor: ${maiorValordia}\n`);

// Ponto 3 - Calcular a média dos valores para então depois procurar quais foram os dias que foram superiores a esse valor.
const mediaValor = (
  faturamentos.reduce((acc, item) => acc + item.valor, 0) / faturamentos.length
).toFixed(2);
console.log(`A media de valor: ${mediaValor}\n`);

//Com a média calculada, posso utilizar a função filter para procurar os dias que foram superiores a ela.
const diasSuperiores = faturamentos.filter((item) => item.valor > mediaValor);
console.log(`Dias superiores a media: ${diasSuperiores.length}`);
