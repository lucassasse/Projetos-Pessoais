import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nome = 'Fulano'

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="João" />
      <SayMyName nome="Maria" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App
