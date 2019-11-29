import axios from 'axios'

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{Authorization:'Client-ID 393e5d4acf97a5130787a20d22240708305b80c56a32f94d1c598c5a0ae561f9'}
})