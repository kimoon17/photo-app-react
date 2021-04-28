import {Link} from "react-router-dom"

import './style.scss'

function handleSignOut() {
  window.localStorage.removeItem('token');
  document.location.reload();
}

export function handleLogin() {
  window.localStorage.setItem('token', 'abc');
  document.location.reload();
}

function UserNavBar() {
  return (
      <nav className="navbar-wrapper">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a onClick={() => handleSignOut()}>Sign Out</a></li>
          <li><Link to="/postimage">Post image</Link></li>
          <li><Link to="/imagepost">Image post</Link></li>
        </ul>
      </nav>
  );
}

function GuestNavBar() {
  return (
      <nav className="navbar-wrapper">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/sign-up">Register</Link></li>
        </ul>
      </nav>
  );
}

const Navbar = () => {
  const isLoggedIn = window.localStorage.getItem('token') != null;
  if (isLoggedIn) {
    return <UserNavBar />
  } else {
    return <GuestNavBar />
  }
}


export default Navbar