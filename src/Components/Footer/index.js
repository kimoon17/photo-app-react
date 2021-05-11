import {Link} from "react-router-dom";
import './style.scss'

const Footer = () => <footer>
    <div>
        <small>Don't have an account? <strong><Link to="/sign-up">Sign up.</Link></strong></small>
    </div>
    <ul>
        <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank" rel="noreferrer" ><i
            className="fab fa-facebook"/></a></li>
        <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank" rel="noreferrer"><i
            className="fab fa-instagram"/></a></li>
        <li><a href="https://www.youtube.com/watch?v=NMsPq4HPqaE" target="_blank" rel="noreferrer"><i
            className="fab fa-twitter"/></a>
        </li>
    </ul>
</footer>

export default Footer