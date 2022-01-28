import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import Search from "./components/Search"

const App = () => {
  const [countries, setcountries] = useState([])
  const [searchName,setsearchName] = useState('')

  const hook = () =>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response=>setcountries(response.data))

  }

  useEffect(hook,[])

  const countries_to_show= countries.filter(country=>country.name.toLowerCase())

}

export default App