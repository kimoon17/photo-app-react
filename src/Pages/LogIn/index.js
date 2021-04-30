import './style.scss'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {withRouter} from 'react-router'

function RenderForm({handleSubmit}) {
    return (
        <Form className="loginForm">
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" id="username" name="username" placeholder="Username" required/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" name="password" placeholder="Password" required/>
            </FormGroup>
            <Button color="primary" onClick={handleSubmit}>Log In</Button>
        </Form>
    );
}

function LogIn({history, setUser}) {

  const handleLogin = () => {
    const myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append('Access-Control-Allow-Headers', 'origin, content-type, accept');

    fetch('http://127.0.0.1:8000/userData/', {
      headers: myHeaders
    })
      .then(data => data.json())
      .then(data => {
        window.localStorage.setItem('user', JSON.stringify(data));
        setUser(data)
        history.push('/imagepost')
      })
    return false
  }

    return (
        <div className="log-in__container">
            <header>
                <h1>Login</h1>
            </header>
            <RenderForm handleSubmit={handleLogin}/>
        </div>
    )
}

export default withRouter(LogIn)