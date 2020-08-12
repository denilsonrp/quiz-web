import { getAnswersByQuiz, renderAnswerCard } from './components/answer'
import { getQuiz } from './components/quiz'
import { getUrlParam } from './components/get-url-param'

const quizId = getUrlParam('quizId')

getQuiz(quizId).then(responseQuiz => {
  if (!responseQuiz) location.href = '/'

  document.getElementById('quiz-title').innerHTML = responseQuiz.title

  getAnswersByQuiz(quizId).then(responseAnswers => {
    document.getElementById('loading').remove()

    if (!responseAnswers.length) {
      const msg = document.createElement('p')
      msg.setAttribute('class', '_center')
      msg.appendChild(document.createTextNode('Ops, esse questionário ainda não possui respostas'))

      document.getElementById('list-answers').appendChild(msg)
    }

    renderAnswerCard(responseAnswers, responseQuiz)
  })
})
