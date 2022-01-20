
import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleclick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const increasegood = () => {setGood(good+1)}
  const increasebad = () => {setBad(bad+1)}
  const increasenut = () => {setNeutral(neutral+1)}


  return (
    <div>
      Give Feedback
      <br></br>


      <Button
        handleclick={increasegood}
        text='good'
      />
      <Button
        handleclick={increasenut}
        text='neutral'
      />
      <Button
        handleclick={increasebad}
        text='bad'
      />
      <br></br>
      Statistics
      <br></br>
      good {good}
      <br></br>
      neutral {neutral}
      <br></br>
      bad {bad}
      <br></br>
      all {good+bad+neutral}
      
      <br></br>
      average {(good-bad)/(good+bad+neutral)}
      <br></br>
      percentage {good*100/(good+bad+neutral)} %

       
    </div>
  )
}

export default App


