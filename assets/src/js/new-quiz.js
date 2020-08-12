import { submitFormNewQuiz } from './components/quiz'
import { createInput } from './components/create-input'

document.getElementById('add-new-question')
  .addEventListener('click', createInput)

document.getElementById('form-new-quiz')
  .addEventListener('submit', submitFormNewQuiz)
