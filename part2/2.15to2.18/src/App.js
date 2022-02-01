import './App.css';
import { useState,useEffect } from 'react';
import personservice from './services/persons'
import Person from './components/Person'
import { eventWrapper } from '@testing-library/user-event/dist/utils';




const Footer = () => {
  const footerStyle = {
    color: 'violet',
    fontStyle: 'italic',
    fontSize: 24
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
    </div>
  )
}





const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}

const App = () => {

  const [persons, setpersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  


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
      setErrorMessage("This name already exists in the phonebook")
      console.log('Exists')
      setNewPerson('')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
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
      <Notification message={errorMessage} />
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
      <Footer />  
    </div>
  )
}
export default App;
