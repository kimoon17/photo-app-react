import {Link} from "react-router-dom"

const Navbar = () => <nav className="navbar-wrapper">
  <ul>
    <li><Link to="/">Login</Link></li>
    <li><Link to="/sign-up">Register</Link></li>
    <li><Link to="/postimage">Post image</Link></li>
    <li><Link to="/imagepost">Image post</Link></li>
  </ul>
  <div className="burger">
    <div></div>
  </div>
</nav>

export default Navbar