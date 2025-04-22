import runGame from '../src/index.js'

import generateRandomNumber from '../utils/utils.js'

const gameIntroMessage = 'What number is missing in the progression?'

const generateArithmeticProgression = (firstElement, numberOfElements) => {
  const step = generateRandomNumber(1, 10)
  const arithmeticProgression = []

  for (let i = 0, j = firstElement; i < numberOfElements; i += 1, j += step) {
    arithmeticProgression.push(j)
  }

  return arithmeticProgression
}

const hideRandomProgressionElement = (progression) => {
  const newProgression = [...progression]
  const randomIndex = generateRandomNumber(0, progression.length - 1)
  const hiddenElement = newProgression[randomIndex]
  newProgression[randomIndex] = '..'

  return [hiddenElement, newProgression]
}

const getQuestionAndAnswer = () => {
  const firstElement = generateRandomNumber(1, 100)
  const numberOfElements = generateRandomNumber(5, 10)

  const arithmeticProgression = generateArithmeticProgression(firstElement, numberOfElements)

  const [correctAnswer, hiddenProgression] = hideRandomProgressionElement(arithmeticProgression)

  const question = `Question: ${hiddenProgression.join(' ')}`

  return [question, correctAnswer.toString()]
}

export default () => runGame(gameIntroMessage, getQuestionAndAnswer)
