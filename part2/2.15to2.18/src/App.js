import './App.css';
import { useState,useEffect } from 'react';
import personservice from './services/persons'
import Person from './components/Person'
import { eventWrapper } from '@testing-library/user-event/dist/utils';


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
    console.log(persons)
    if(persons.some(e => e.name === newPerson)){
      alert("This name already exists in the phonebook")
      console.log('Exists')
      setNewPerson('')
    }
    else{
      personservice
      .create(PersonObject)
        .then(returnedPerson => {
        setpersons(persons.concat(returnedPerson))
        setNewPerson('')
        setNewNumber('')
      })
    }


  }

  const deletePerson = (event) =>{
    event.preventDefault()
    const id=event.target.value
    const personname= persons.find(person=>person.id==id).name


    personservice.
    remove(id)
    .then(response => 
      {
        setpersons(persons.filter(person=>person.id!=id))
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
      <h1>PhoneBook</h1>
      <div align='center'>

      <ol>
        {persons.map(P => 
            <Person person={P} deletePerson={deletePerson} />
        )}

      </ol>
      <form onSubmit={addPerson}>
        <label> Enter Name: </label>
        <input
          value={newPerson}
          onChange={handlePersonChange}
        />
        <br></br>
        <label>Enter New Number : </label>
        <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        <br></br>
        <button type="submit">save</button>
      </form>  
      </div>   
    </div>
  )
}
export default App;
