import ReactDOM from 'react-dom'
import App from './App.js'

import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

promise.then(response => {
  console.log(response)
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
