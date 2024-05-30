//Inicializa com a string 0 na tela de resultados
let displayValue = '0';

//Exibe o valor atual na tela
function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}


function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') { //Se o resultado for 0 e não for com ponto flutuante, redefine como string
    displayValue = '';
  }
  displayValue += value; //Adiciona o novo valor 
  updateDisplay(); //Atualiza a tela com o novo valor
}
 //Define a função de Clear para voltar o 0 na tela de resultado
function clearDisplay() {
  displayValue = '0';
  updateDisplay(); //Atualiza a tela com o novo valor 0
}

//Avalia a expressão e exibe o resultado
function calculate() {
  try {
    displayValue = eval(displayValue).toString(); //Avalia qual expressão está senso usada e calcula o valor convertendo para string
    updateDisplay(); //Atuliza a tela com o novo valor
  } catch (error) {
    displayValue = 'Error'; //Exibe a mensagem de ERROR caso tenha expressão incorreta
    updateDisplay();
  }
}