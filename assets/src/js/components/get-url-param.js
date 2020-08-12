/**
 * Returns param from url
 * @param {String} param
 */
const getUrlParam = (param) => {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString)

  return params.get(param)
}

export {
  getUrlParam
}
