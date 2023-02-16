import { Link } from 'react-router-dom'
import { usePlayer } from './usePlayer'
import '../styles/Header.css'

export const Header = () => {
  const { player } = usePlayer()

  return (
    <div className="container">
      <div className="header">
        <Link className="btn" to="/">
          Home
        </Link>
        <Link className="btn" to="/store">
          Store
        </Link>
        <Link className="btn" to="/gym">
          Gym
        </Link>
        <Link className="btn" to="/work">
          Work
        </Link>
        <Link className="btn" to="/forest">
          Forest
        </Link>
      </div>
      <div className="phrase-container">
        <p className="phrase">Life: {player.life}</p>
        <p className="phrase">Food: {player.food}</p>
        <p className="phrase">Strength: {player.strength}</p>
        <p className="phrase">Money: {player.money}</p>
      </div>
    </div>
  )
}
