import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {
  const nome = 'Fulano'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <HelloWorld />
      <HelloWorld />
      <SayMyName nome="João" />
      <SayMyName nome="Maria" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Lucas"
        idade="24"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  )
}

export default App
