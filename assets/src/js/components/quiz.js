import { formatDate } from './format-date'
import apiConfig from './../services/api-config'

/**
 * List quiz infos by id
 * @param {String} id
 */
const getQuiz = async (id) => {
  const response = await apiConfig.get(`/quizzes/${id}`)

  return response.data
}

/**
 * Lists all quizzes from API
 */
const getQuizzes = async () => {
  const response = await apiConfig.get('/quizzes')

  return response.data
}

/**
 * Render a card with basic quiz infos
 * @param {Object[]} quizzes
 */
const renderQuizCard = (quizzes) => {

  quizzes.forEach(quiz => {
    const add     = document.createElement('a')
    const all     = document.createElement('a')
    const card    = document.createElement('div')
    const date    = document.createElement('small')
    const user    = document.createElement('p')
    const infos   = document.createElement('div')
    const title   = document.createElement('h2')
    const buttons = document.createElement('div')

    title.appendChild(document.createTextNode(quiz.title))
    user.appendChild(document.createTextNode(quiz.user))
    date.appendChild(document.createTextNode(formatDate(quiz.date)))

    add.setAttribute('class', 'fa fa-1_5x fa-plus-circle')
    add.setAttribute('href', `nova-resposta.html?quizId=${quiz.id}`)
    add.setAttribute('title', 'Responder questionário')

    all.setAttribute('class', 'fa fa-1_5x fa-list-ol')
    all.setAttribute('href', `respostas.html?quizId=${quiz.id}`)
    all.setAttribute('title', 'Ver respostas do questionário')

    infos.setAttribute('class', 'infos')
    infos.appendChild(date)
    infos.appendChild(title)
    infos.appendChild(user)

    buttons.setAttribute('class', 'buttons')
    buttons.appendChild(add)
    buttons.appendChild(all)

    card.setAttribute('class', 'card _align-center _space-between')
    card.appendChild(infos)
    card.appendChild(buttons)

    document.getElementById('list-quizzes').appendChild(card)
  })
}

/**
 * Calls the API endpoint to create new quiz
 * @param event
 */
const submitFormNewQuiz = async (event) => {
  event.preventDefault()

  const form = document.getElementById('form-new-quiz')
  const [ title, user, ...rest ] = form.querySelectorAll('input')
  const questions = []

  rest.forEach(question => {
    questions.push(question.value)
  })

  const data = {
    title: title.value,
    user: user.value,
    questions
  }

  try {
    await apiConfig.post(`/quizzes`, data)

    alert('Novo questionário criado com sucesso!')

    location.href = 'index.html'
  } catch(err) {
    console.log(err)
  }
}

export {
  getQuiz,
  getQuizzes,
  renderQuizCard,
  submitFormNewQuiz
}
