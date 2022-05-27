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

function App() {
  const nome = 'Fulano'

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Testando</h1>
      <Frase />
      <HelloWorld />
      <hr />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
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
    </div>
  )
}

export default App
