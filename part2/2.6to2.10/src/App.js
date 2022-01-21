import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 


  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      date: new Date().toISOString(),
      
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
    }
    
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((x,index)=><p key={index}>{x.name}</p>)}
      
    </div>
  )
}


export default App