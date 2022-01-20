
import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleclick}>
      {props.text}
    </button>
  )
}


const StatisticLine = (props) => {

    return(
      <div>
        {props.text}          {props.value}
       </div>
    )

}



const Statistics = (props) => {

  if(props.good+props.bad+props.neutral==0){
    return(
      <div>
        No Feedback Given
      </div>
    )
  }


  return(
    <div>
      Statistics

      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />

      all {props.good+props.bad+props.neutral}
      
      <br></br>
      average {(props.good-props.bad)/(props.good+props.bad+props.neutral)}
      <br></br>
      percentage {props.good*100/(props.good+props.bad+props.neutral)} %

    </div>
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

       <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App


