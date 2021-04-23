import Home from './Pages/Home'
import LogIn from './Pages/LogIn'
import PostImage from "./Pages/PostImage"
import SignUp from "./Pages/SignUp"
import {Route, Switch} from "react-router-dom"
import ImagePost from "./Pages/ImagePost"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Burger from './Components/Burger'

function App() {
  return (
    <div className="big-wrapper">
      <Navbar/>
      <Burger />
      <Switch>
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/login" render={() => <LogIn/>}/>
        <Route path="/postimage" render={() => <PostImage/>}/>
        <Route path="/sign-up" render={() => <SignUp/>}/>
        <Route path="/imagepost" render={() => <ImagePost/>}/>
        <Route path="/error">
          <h1 className="not-found">This is ERRRROR! 500 </h1>
        </Route>
        <Route path="*">
          <h1 className="not-found">Oops! 404</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
