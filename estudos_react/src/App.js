import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional'
import OutraLista from './components/OutraLista'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'
import NavBar from './components/layout/NavBar'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Footer from './components/layout/Footer'

function App() {
  const name = 'Fulano'

  const meusItens = ['React', 'Vue', 'Angular']

  const [nomeX, setNomeX] = useState()

  return (
    <div className="App">
      <h1>Testando</h1>
      <Frase />
      <HelloWorld />
      <hr />
      <SayMyName nome="João" />
      <SayMyName nome={name} />
      <hr />
      <Pessoa
        nome="Lucas"
        idade="24"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <hr />
      <List />
      <hr />
      <Evento numero="1" />
      <Form />
      <hr />
      <h1>Renderização Condicional</h1>
      <Condicional />
      <hr />
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <hr />
      <h1>State Lift</h1>
      <SeuNome setNome={setNomeX} />
      <Saudacao nome={nomeX} />
      <hr />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Empresa" element={<Empresa />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
