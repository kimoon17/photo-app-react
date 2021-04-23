import './style.scss'
import {Link} from 'react-router-dom'

export default function LogIn() {
  return (
    <div className="log-in__container">

      <header>
        <h1>Login</h1>
      </header>
      <form>
        <fieldset>
          <input type="text" id="username" name="username"
                 placeholder="Username" required/>
          <br/>
            <input type="password" id="password" name="password"
                   placeholder="Password" required/>
          <br/>
        </fieldset>
        <fieldset>
          <button id="login">Login</button>
        </fieldset>
      </form>

      <section className="desc">
        <p>Forgot login? <strong><a href="#">Get help signing in.</a></strong></p>
      </section>

      <footer>
        <div>
          <small>Don't have an account? <strong><Link to="/sign-up">Sign up.</Link></strong></small>
        </div>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
            className="fab fa-facebook"/></a></li>
          <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
            className="fab fa-instagram"/></a></li>
          <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank"><i
            className="fab fa-twitter"/></a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

