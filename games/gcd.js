import runGame from '../src/index.js';

import generateRandomNumber from '../utils/utils.js';

const gameIntroMessage = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const smallestNumber = Math.min(a, b);
  let gcd = 1;

  for (let i = 2; i <= smallestNumber; i += 1) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);

  const correctAnswer = getGCD(firstNumber, secondNumber);

  const question = `Question: ${firstNumber} ${secondNumber}`;

  return [question, correctAnswer.toString()];
};

export default () => runGame(gameIntroMessage, getQuestionAndAnswer);
