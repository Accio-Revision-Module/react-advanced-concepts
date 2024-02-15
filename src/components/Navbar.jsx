import { Link } from 'react-router-dom'
import Toggle from './Toggle';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function Navbar() {
  const {user, logout} = useContext(UserContext)

  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/store"}>Store</Link>
        <Link to={"/about"}>About</Link>
        {user ? (
          <button onClick={logout}>Logout</button>
        ): (
          <Link to={"/login"}>Login</Link>
        )}
        <Toggle />
    </nav>
  )
}

export default Navbar