import { getQuizzes, renderQuizCard } from './components/quiz'

getQuizzes().then(response => {
  document.getElementById('loading').remove()

  renderQuizCard(response)
})
