import { getQuizzes, renderQuizCard } from './components/quiz'

getQuizzes().then(response => {
  document.getElementById('loading').remove()

  if (!response.length) {
    const msg = document.createElement('p')
    msg.setAttribute('class', '_center')
    msg.appendChild(document.createTextNode('Ops, nenhum questionário cadastrado ainda'))

    document.getElementById('list-quizzes').appendChild(msg)
  }

  renderQuizCard(response)
})
