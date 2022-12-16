import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Routes from './components/Routes'
import Stats from './components/Stats'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Stats />
      <Routes />
    </BrowserRouter>
  )
}

export default App
