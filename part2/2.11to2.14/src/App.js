import React, { useState } from 'react'




const App = (props) => {

  return(
    <div>
      {props.notes.map(value=><p>{value.content}</p>)}
    </div>
  )

}

export default App