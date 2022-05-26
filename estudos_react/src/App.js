import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional'

function App() {
  const nome = 'Fulano'

  return (
    <div className="App">
      <h1>Testando</h1>
      <Frase />
      <HelloWorld />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Lucas"
        idade="24"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
      <hr />
      <Evento numero="1" />
      <Form />
      <hr />
      <h1>Renderização condicional</h1>
      <Condicional />
    </div>
  )
}

export default App
