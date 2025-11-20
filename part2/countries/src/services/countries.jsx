import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountry = (input) => {
  const request = axios.get(`${baseUrl}/names/${input}`)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data)
}

export default { getCountry, getAll }