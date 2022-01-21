import React, { useState } from 'react'

const PersonForm =(props) =>{

  return(
    <div>
      <form onSubmit={props.addName}>
        <div>
          name: <input 
          value={props.newName}
          onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input
          value={props.newNumber}
          onChange={props.handleNumberChange}
          />
          
          </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Persons = (props) =>{

  return(
    <div>
      {props.persons.map((x,index)=><p key={index}>{x.name}     {x.number}</p>)}
    </div>
  )
}


const App = () => {


  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }



  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
      
    }
    var data = persons.find(function(ele) {
      return ele.name === newName;
  });

    if (data) {
      alert(newName+"  is already added to phonebook");
    }
    else{
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
    
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addName={addName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      
      <Persons persons={persons}/>
    </div>
  )
}


export default App