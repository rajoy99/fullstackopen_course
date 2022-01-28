import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import Search from "./components/Search"

const App = () => {
  const [persons, setPersons] = useState([])
  // const [newNote, setNewNote] = useState('')
  // const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render',persons.length, 'notes')

  return (
    <div>
      <Search/>
      <h1>Notes</h1>
  
      <ul>
        {persons.map(person => 
            <li key={person.id}>  {person.name} </li>
        )}
      </ul>

    </div>
  )
}

export default App