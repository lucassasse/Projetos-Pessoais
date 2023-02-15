import { Link } from 'react-router-dom'
import '../styles/Header.css'

export const Header = ({ player }) => {
  return (
    <header>
      <div>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/store">Store</Link>
        </button>
        <button>
          <Link to="/gym">Gym</Link>
        </button>
        <button>
          <Link to="/work">Work</Link>
        </button>
      </div>
      <div>
        <p>Life: {player.life}</p>
        <p>Food: {player.food}</p>
        <p>Strength: {player.strength}</p>
        <p>Money: {player.money}</p>
      </div>
    </header>
  )
}
