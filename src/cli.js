import readlineSync from 'readline-sync';

import { isNumberEven, generateRandomNumber } from '../utils/utils.js';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);

  return name;
};

export const runEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = generateRandomNumber(1, 100);
    const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
