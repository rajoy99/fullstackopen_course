import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';


const App = () => {

  const [persons, setpersons] = useState([])
  const [newPerson, setNewPerson] = useState('')


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
      content: newPerson,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }

    personservice
      .create(PersonObject)
        .then(returnedPerson => {
        setpersons(persons.concat(returnedPerson))
        setNewPerson('')
      })
  }


  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  return (
    <div>
      <h1>persons</h1>
      <div>
      </div>   
      <ul>
        {personsToShow.map(Person => 
            <Person
              key={Person.id}
              Person={Person} 
            />
        )}
      </ul>
      <form onSubmit={addPerson}>
        <input
          value={newPerson}
          onChange={handlePersonChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}
export default App;
