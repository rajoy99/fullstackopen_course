import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import Search from "./components/Search"


const Nations = ({searchName,nationstoshow,showCountry}) => {

  if (nationstoshow.length === 1) {
    return ( <Nation nation={nationstoshow[0]} /> )
  }
  else if(nationstoshow.length<=10){
    return ( <ClickableNation nationstoshow={nationstoshow} showCountry={showCountry} /> )
  }
  else if (searchName === '') {
    return ( <AllNations nationstoshow={nationstoshow} /> )
  }
  else {
    return ( <div>Too many matches, specify another filter</div>  )
  }
}

const App = () => {
  const [countries, setcountries] = useState([])
  const [searchName,setsearchName] = useState('')

  const hook = () =>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response=>setcountries(response.data))

  }

  useEffect(hook,[])

  const countries_to_show= countries.filter(country=>country.name.toLowerCase().includes(searchName.toLowerCase()))

  const handlesearchchange = (event) =>
  {
    setsearchName(event.target.value)
  }

  const showCountry = (event) => {
    event.preventDefault()
    setsearchName(event.target.value)
  }
  
  return (
    <div>
    <div>
      find countries <input value={searchName} onChange={handlesearchchange}/>
    </div>
    <div>
      {countries.map(nation) = <div key={nation.numericCode}> {nation.name}</div>}
    </div>
    {/* <Nations searchName={searchName} nationstoshow={nationstoshow} showCountry={showCountry}/> */}
    </div>
  );



}

export default App