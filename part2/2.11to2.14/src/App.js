import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import Search from "./components/Search"

const App = () => {
  const [countries, setcountries] = useState([])
  // const [newNote, setNewNote] = useState('')
  // const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all"
      )
      .then(res => {
        console.log(res);
        setcountries(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const searchHandler = value => {
  //   setSearchValue(value);
  // };

  // let updateUsers = countries.filter(item => {
  //   return item.name.toLowerCase().includes(searchValue);
  // }, []);

  

  // const handleOnInputChange = (event) => {
  //   const query = event.target.value;
  //             this.setState({ query, loading: true, message: ''  } );
  // };

  // console.log('render  ',countries.length, 'notes')

  // return (
  //   <div >
  //     <h5>Shift </h5>
  //     <Search searchHandler={searchHandler} />
  //     <ul>
  //       {(searchValue === '' ? countries : updateUsers).map(country => (
  //         <ol key={country.name}>
  //           <br />
  //           {country.name} <br />
  //         </ol>
  //       ))}
  //     </ul>
  //   </div>
  // )

  return(
    <div>
      {val=>{countries[0].name}}
    </div>
  )

}

export default App