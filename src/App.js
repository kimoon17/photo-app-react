import Home from './Pages/Home'
import LogIn from './Pages/LogIn'
import PostImage from "./Pages/PostImage"
import SignUp from "./Pages/SignUp"
import {Route, Switch} from "react-router-dom"
import ImagePost from "./Pages/ImagePost"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Burger from './Components/Burger'
import {useState} from 'react'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  const [user, setUser] = useState(window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null)

  return (
    <div className="big-wrapper">
      <Navbar user={user} setUser={setUser}/>
      <Burger />
      <Switch>
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/login" render={() => <LogIn setUser={setUser}/>}/>
        <ProtectedRoute u="adasd" user={user} path="/postimage" Component={<PostImage />}/>
        <Route path="/sign-up" render={() => <SignUp/>}/>
        <ProtectedRoute u="adasd" user={user} path="/imagepost" Component={ImagePost}/>
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
