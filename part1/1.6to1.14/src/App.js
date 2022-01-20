
import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      Give Feedback
      <br></br>
      <Button handleClick={setGood(good + 1)} text="Good" />
      <br></br>
      Statistics
      <br></br>
      {good}

    </div>
  )
}

export default App


