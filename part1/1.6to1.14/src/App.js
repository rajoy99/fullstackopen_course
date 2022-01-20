import React from 'react'



const Header = (props) => {

    return (
        <div>
          <h1> {props.course} </h1>
        </div>
    )

}

const Part = (props) =>{

  return (
    <div>
      {props.part} {props.exercise}
    </div>
  )

}


const Content = () => {


  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>

  )

}


const Total = (props) => {

  return (
    <div>
      <p>
      Number of exercises {props.exercise}
      </p>
    </div>
  )

}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

 var container= new Array(3)

  for(let i=0;i<3;i++){
    container[i]=<p> {course.parts[i].name} {course.parts[i].exercises} </p>
  }
 
  return (
    <div>
      <h1>{course.name}</h1>
      {container}
    </div>
  )
}



export default App