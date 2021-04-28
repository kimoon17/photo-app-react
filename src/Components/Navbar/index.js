import {Link} from "react-router-dom"

import './style.scss'

const Navbar = ({user, setUser}) => {

  const handleSignOut = () => {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <nav className="navbar-wrapper">
      <ul>
        <li><Link to="/">Home</Link></li>
        {user && <li><Link to="/postimage">Post image</Link></li>}
        {user && <li><Link to="/imagepost">Image post</Link></li>}
        {user && <li onClick={handleSignOut}><Link to="/">Sign Out</Link></li>}
        {!user && <li><Link to="/login">Login</Link></li>}
        {!user && <li><Link to="/sign-up">Register</Link></li>}
      </ul>
    </nav>
  )
}


export default Navbar