import React, { useState } from 'react'



const Persons = (props) =>{

    return(
      <div>
        {props.persons.map((x,index)=><p key={index}>{x.name}     {x.number}</p>)}
      </div>
    )
  }
  
  export default Persons