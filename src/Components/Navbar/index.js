import {Link} from "react-router-dom"
import './style.scss'
import {Button} from 'reactstrap'

const Navbar = () => <nav className="navbar-wrapper">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/sign-up">Register</Link></li>
    <li><Link to="/postimage">Post image</Link></li>
    <li><Link to="/imagepost">Image post</Link></li>
  </ul>
</nav>

export default Navbar