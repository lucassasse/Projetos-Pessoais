import { Link } from 'react-router-dom'

export const Header = ({ player }) => {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/store">Store</Link>
        <br />
        <Link to="/gym">Gym</Link>
        <br />
        <Link to="/work">Work</Link>
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
