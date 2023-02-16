import { Header } from '../components/Header'
import { usePlayer } from '../components/usePlayer'
import '../styles/Main.css'

export const Forest = () => {
  const { player, setPlayer } = usePlayer()

  return (
    <div>
      <Header />
      <h1 className="title">FOREST</h1>
      <button className="button" disabled={true}>
        Batle
      </button>
      <p>Aqui haverá um sistema de batalhas!</p>
    </div>
  )
}
