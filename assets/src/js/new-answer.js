import { getQuiz } from './components/quiz'
import { submitFormNewAnswer } from './components/answer'
import { getUrlParam } from './components/get-url-param'
import { createInput } from './components/create-input'
import { initMap } from './components/map'

const quizId = getUrlParam('quizId')

getQuiz(quizId).then(responseQuiz => {
  if (!responseQuiz) location.href = '/'

  document.getElementById('quiz-title').innerHTML = responseQuiz.title

  responseQuiz.questions.forEach(question => {
    createInput({ placeholder: question })
  })
})

initMap()

document.getElementById('quizId').value = quizId

document.getElementById('form-new-answer')
  .addEventListener('submit', submitFormNewAnswer)
