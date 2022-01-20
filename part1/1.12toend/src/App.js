import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  



  const [selected, setSelected] = useState(0)
  const [votes,setVote] = useState([0,0,0,0,0,0])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const votit = () => {
    const copy=[...votes]
    copy[selected]+=1 
    setVote(copy)

}


  

  const doselect = () =>{setSelected(getRandomInt(0,6))}

  const selectmaxindex=votes.indexOf(Math.max(...votes))

  const selectmaxvalue=Math.max(...votes)
  const selectmaxvalueqt = anecdotes[selectmaxindex]

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <button onClick={votit}>

          vote

      </button>
      <button onClick={doselect}>

        next anecdote

      </button>
      <br></br>

      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes 

      <h2>Anecdote with most votes</h2>
      <br></br>
      {selectmaxvalueqt}

      <br></br>
      has {selectmaxvalue} votes



    </div>


  )
}

export default App