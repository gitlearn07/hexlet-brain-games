import runGame from '../src/index.js';

import generateRandomNumber from '../utils/utils.js';

const gameIntroMessage = 'What is the result of the expression?';

const performCalculation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];

  const firstOperand = generateRandomNumber(1, 100);
  const secondOperand = generateRandomNumber(1, 100);
  const operator = operators[generateRandomNumber(0, 2)];

  const correctAnswer = performCalculation(firstOperand, secondOperand, operator);

  const question = `Question: ${firstOperand} ${operator} ${secondOperand}`;

  return [question, correctAnswer.toString()];
};

export default () => runGame(gameIntroMessage, getQuestionAndAnswer);
