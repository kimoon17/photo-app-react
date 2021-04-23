import Login from './pages/login/login.js';
import Postimage from "./pages/postimage/postimage";
import Registration from "./pages/registration/registration"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Imagepost from "./pages/imagepost/imagepost";

function App() {
    return (
        <div className="big-wrapper">
            <BrowserRouter>
                <nav className="navbar-wrapper">
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/registration">Register</Link></li>
                        <li><Link to="/postimage">Post image</Link></li>
                        <li><Link to="/imagepost">Image post</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route path="/postimage">
                        <Postimage/>
                    </Route>
                    <Route path="/registration">
                        <Registration/>
                    </Route>
                    <Route path="/imagepost">
                        <Imagepost/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
