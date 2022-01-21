import React from 'react'



const Course = (props) =>{

  return(
   <div>
     <h1>{props.courses[0].name}</h1>
      {props.courses[0].parts.map(val=><p>{val.name} {val.exercises}</p>)}
      <h4>total of {props.courses[0].parts.reduce(function(acc,obj){return acc+obj.exercises},0)} courses</h4>
      <h2>{props.courses[1].name}</h2>
      {props.courses[1].parts.map(val=><p>{val.name} {val.exercises}</p>)}
      <h4>total of {props.courses[1].parts.reduce(function(acc,obj){return acc+obj.exercises},0)} courses</h4>
   </div>
  )

}


const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App