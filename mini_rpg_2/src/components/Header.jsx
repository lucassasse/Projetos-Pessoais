import { Link } from 'react-router-dom'

export const Header = ({ life }) => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/store">Store</Link>
      </div>
      <div>
        <h3>Life: {life}</h3>
        <h3>Money: {}</h3>
      </div>
    </div>
  )
}
