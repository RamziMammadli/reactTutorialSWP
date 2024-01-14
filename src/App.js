import React, { useState } from 'react'
import { Home } from './Pages/Home'
import { Router } from './Router'
import { MainContext } from './api/context/context'

const App = () => {

  const [name, setName] = useState("Ramzi");
  const [surname, setSurname] = useState("Mammadli");
  const [number, setNumber] = useState("29");
  const [db , setDb] = useState([])

  const data = {
    name,
    setName,
    surname,
    setSurname,
    number,
    setNumber,
    setDb,
    db
  };
  
  return (
    <>
    <MainContext.Provider value={data}>
      <Router/>
    </MainContext.Provider>
    </>
  )
}

export default App