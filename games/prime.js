import runGame from '../src/index.js'

import generateRandomNumber from '../utils/utils.js'

const gameIntroMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isNumberPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const getQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100)
  const correctAnswer = isNumberPrime(randomNumber) ? 'yes' : 'no'

  const question = `Question: ${randomNumber}`

  return [question, correctAnswer.toString()]
}

export default () => runGame(gameIntroMessage, getQuestionAndAnswer)
