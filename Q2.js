function Fibonnaci(numeroInserido) {
  let sequencia = [0, 1];
  while (sequencia[sequencia.length - 1] < n) {
    sequencia.push(
      sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]
    );
  }
  return sequencia.includes(n)
    ? `O numero ${numeroInserido} pertence a sequência `
    : `O numero ${numeroInserido} não pertence a sequência`;
}

//Favor inserir o número desejado alterando o valor da variável constante numeroInserido!!
const numeroInserido = 10;
console.log(Fibonnaci(numeroInserido));
