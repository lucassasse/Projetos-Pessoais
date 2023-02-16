import { Header } from '../components/Header'
import { usePlayer } from '../components/usePlayer'
import '../styles/Main.css'

export const Store = () => {
  const { player, setPlayer } = usePlayer()

  const buyFood = () => {
    if (player.money > 0) {
      setPlayer({
        ...player,
        food: player.food + 1,
        money: player.money - 1
      })
    }
  }

  return (
    <div>
      <Header player={player} />
      <h1 className="title" >STORE</h1>
      <button className="button" onClick={buyFood} disabled={player.money <= 0}>
        Buy food
      </button>
    </div>
  )
}
