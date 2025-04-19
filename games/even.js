import runGame from '../src/index.js';

import generateRandomNumber from '../utils/utils.js';

const gameIntroMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';

  const question = `Question: ${randomNumber}`;

  return [question, correctAnswer];
};

export default () => runGame(gameIntroMessage, getQuestionAndAnswer);
