const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamentoEstados).reduce(
  (acc, valor) => acc + valor,
  0
);

// Calcula o percentual de cada estado
const percentualPorEstado = {};
for (let estado in faturamentoEstados) {
  percentualPorEstado[estado] = (
    (faturamentoEstados[estado] / faturamentoTotal) *
    100
  ).toFixed(2);
}

//Para exibir o resultado
for (let estado in percentualPorEstado) {
  console.log(
    `O percentual do estado ${estado} é ${percentualPorEstado[estado]}%`
  );
}
