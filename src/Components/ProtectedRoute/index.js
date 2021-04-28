import {Route} from "react-router-dom"
import React from "react"

const ProtectedRoute = ({user, Component, ...rest}) => {

  const getComponent = () => {

    if (!user) {
      return <h1 className="not-found">Oops! 404</h1>
    }

    return (
      <Component {...rest}/>
    )
  }

  return (
    <Route {...rest} render={getComponent}/>
  )
}

export default ProtectedRoute