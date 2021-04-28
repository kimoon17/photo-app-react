import './style.scss'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {handleLogin} from '../../Components/Navbar/index';
import {withRouter} from 'react-router'

function RenderForm({handleSubmit}) {
    return (
        <Form className="loginForm" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" id="username" name="username" placeholder="Username" required/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" name="password" placeholder="Password" required/>
            </FormGroup>
            <Button color="primary">Log In</Button>
        </Form>
    );
}

function LogIn({history, setUser}) {

  const handleLogin = () => {
    window.localStorage.setItem('user', JSON.stringify({name: 'Kimon', token: 'abc'}));
    setUser({name: "Kimon", token: 'abc'})
    history.push('/imagepost')
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