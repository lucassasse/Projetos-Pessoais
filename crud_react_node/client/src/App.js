import React, { useState } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [values, setValues] = useState()

  const handleChangeValues = value => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleClickButton = () => {
    //console.log(values)
    Axios.post("http://localhost:3001/")
  }

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Scrim Shop</h1>
        <input
          type="text"
          placeholder="Nome"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="cost"
          placeholder="Preço"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="category"
          placeholder="Categoria"
          className="register-input"
          onChange={handleChangeValues}
        />
        <button className="register-button" onClick={() => handleClickButton()}>
          Cadastrar
        </button>
      </div>
    </div>
  )
}

export default App
