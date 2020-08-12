/**
 * Formate date as BR format (DD/MM/YYY HH:mm)
 * @param {Date} date
 */
const formatDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }

  return new Intl.DateTimeFormat('default', options).format(new Date(date))
}

export {
  formatDate
}
