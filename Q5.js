// ATENÇÃO!! A string que será passada como parâmetro será invertida e exibida no console.
const stringEntrada = "Rafael";

// Função para inverter a string passada como parâmetro
function inverterString(str) {
  let stringInvertida = "";

  // Itera sobre a string do final para o início e concatena cada caractere
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

// Chama a função e exibe o resultado
const resultado = inverterString(stringEntrada);
console.log(`String original: ${stringEntrada}`);
console.log(`String invertida: ${resultado}`);
