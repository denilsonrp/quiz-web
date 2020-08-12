const questionsArea = document.getElementById('questions-area')

/**
 * Creates a input text field
 */
const createInput = ({ placeholder }) => {
  const input = document.createElement('input')

  input.setAttribute('class', 'input')
  input.setAttribute('placeholder', placeholder || 'Digite aqui sua pergunta...')
  input.setAttribute('required', true)

  questionsArea.appendChild(input)
}

export {
  createInput
}
