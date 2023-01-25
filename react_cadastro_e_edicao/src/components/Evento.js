import Button from './evento/Button'

function Evento({ numero }) {
  function meuEvento() {
    console.log(`Ativado! - Numero: ${numero}`)
  }

  function segundoEvento() {
    console.log('Segundo evento ativado!')
  }

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </div>
  )
}

export default Evento
