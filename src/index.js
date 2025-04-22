import readlineSync from 'readline-sync'

import greetUser from './cli.js'

export default (gameIntroMessage, getQuestionAndAnswer) => {
  const userName = greetUser()

  console.log(gameIntroMessage)

  let correctAnswers = 0

  while (correctAnswers < 3) {
    const [gameQuestion, correctAnswer] = getQuestionAndAnswer()

    console.log(gameQuestion)
    const userAnswer = readlineSync.question('Your answer: ')

    if (correctAnswer === userAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
