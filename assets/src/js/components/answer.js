import { formatDate } from './format-date'
import apiConfig from '../services/api-config'

/**
 * List all answers by quiz
 * @param {String} quizId
 */
const getAnswersByQuiz = async (quizId) => {
  const response = await apiConfig.get(`/answers/${quizId}`)

  return response.data
}

/**
 * Render a card with answers for quiz
 * @param {Object[]} answers
 */
const renderAnswerCard = (answers, quiz) => {

  answers.forEach(answer => {
    const card      = document.createElement('div')
    const date      = document.createElement('small')
    const user      = document.createElement('h2')
    const infos     = document.createElement('div')
    const answers   = document.createElement('div')
    const latitude  = document.createElement('p')

    user.appendChild(document.createTextNode(answer.user))
    date.appendChild(document.createTextNode(formatDate(answer.date)))
    latitude.appendChild(document.createTextNode(`Coordenadas: ${answer.coordinates.lat}, ${answer.coordinates.lng}`))

    infos.setAttribute('class', 'infos')
    infos.appendChild(date)
    infos.appendChild(user)
    infos.appendChild(latitude)

    answers.setAttribute('class', 'answers')

    // list all answers
    answer.answers.forEach((item, index) => {
      const question = document.createElement('h3')
      const answer = document.createElement('p')

      question.appendChild(document.createTextNode(quiz.questions[index]))
      answer.appendChild(document.createTextNode(item))

      answers.appendChild(question)
      answers.appendChild(answer)
    })

    card.setAttribute('class', 'card _flex-column')
    card.appendChild(infos)
    card.appendChild(answers)

    document.getElementById('list-answers').appendChild(card)
  })
}

/**
 * Calls the API endpoint to create new answer
 * @param event
 */
const submitFormNewAnswer = async (event) => {
  event.preventDefault()

  const form = document.getElementById('form-new-answer')
  const [ quizId, user, lat, lng, ...rest ] = form.querySelectorAll('input')
  const answers = []

  rest.forEach(question => {
    answers.push(question.value)
  })

  const data = {
    quizId: quizId.value,
    user: user.value,
    coordinates: {
      lat: lat.value,
      lng: lng.value
    },
    answers
  }

  console.log(data)

  try {
    await apiConfig.post(`/answers`, data)

    alert('Nova resposta adicionada com sucesso!')

    location.href = `respostas.html?quizId=${quizId.value}`
  } catch(err) {
    console.log(err)
  }
}

export {
  getAnswersByQuiz,
  renderAnswerCard,
  submitFormNewAnswer
}
