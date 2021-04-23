import LogIn from './Pages/LogIn'
import PostImage from "./Pages/PostImage"
import SignUp from "./Pages/SignUp"
import {Route, Switch} from "react-router-dom"
import ImagePost from "./Pages/ImagePost"
import Navbar from './Pages/Navbar'

function App() {
  return (
    <div className="big-wrapper">
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => <LogIn/>}/>
        <Route path="/postimage" component={PostImage}/>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/imagepost">
          <ImagePost/>
        </Route>
        <Route path="/error">
          <h1 className="not-found">This is ERRRROR! 500 </h1>
        </Route>
        <Route path="*">
          <h1 className="not-found">Oops! 404</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App
