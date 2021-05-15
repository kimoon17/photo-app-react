import './style.scss'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import {withRouter} from 'react-router'
import {Formik} from 'formik'
import {useState} from 'react'

function RenderForm({history}) {
  const [errorMsg, setErrorMsg] = useState('')

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      validate={values => {
        const errors = {}
        if (!values.username) {
          errors.username = "Required"
        }
        if (!values.password) {
          errors.password = "Required"
        }
        return errors
      }}
      onSubmit={(values) => {
        fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "origin, content-type, accept",
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(values)
        })
          .then((data) => data.json())
          .then((data) => {
            if(data.token){
              window.localStorage.setItem('token', data.token)
              history.push('/')
            }
            if(data.error){
              setErrorMsg(data.error)
            }
          })
      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <Form className="loginForm">
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </FormGroup>
          <Button color="primary" onClick={handleSubmit}>Log In</Button>
          <span className="error">{errorMsg}</span>
        </Form>
      )}
    </Formik>
  )
}

function LogIn({...rest}) {

  return (
    <div className="log-in__container">
      <header>
        <h1>Login</h1>
      </header>
      <RenderForm {...rest}/>
    </div>
  )
}

export default withRouter(LogIn)