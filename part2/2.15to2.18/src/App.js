import './App.css';
import { useState,useEffect } from 'react';
import personservice from './services/persons'
import Person from './components/Person'


const App = () => {

  const [persons, setpersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber,setNewNumber] = useState('')


  useEffect(() => {
    personservice
      .getAll()
      .then(initialpersons => {
      setpersons(initialpersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const PersonObject = {
      name: newPerson,
      number:newNumber
    }

    personservice
      .create(PersonObject)
        .then(returnedPerson => {
        setpersons(persons.concat(returnedPerson))
        setNewPerson('')
        setNewNumber('')
      })
  }


  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h1>persons</h1>
      <div>
      </div>   
      <ul>
        {persons.map(P => 
            <Person person={P}/>
        )}
      </ul>
      <form onSubmit={addPerson}>
        <input
          value={newPerson}
          onChange={handlePersonChange}
        />
        <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}
export default App;
