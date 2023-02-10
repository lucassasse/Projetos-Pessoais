import { Link } from 'react-router-dom'

export const Header = ({ player }) => {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/store">Store</Link>
      </div>
      <div>
        <p>Food: {player.food}</p>
        <p>Money: {player.money}</p>
      </div>
    </header>
  )
}
