import './style.scss'
import {Link} from 'react-router-dom'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

function RenderForm() {
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
            <Button color="primary">Log In</Button>
        </Form>
    );
}

export default function LogIn() {
    return (
        <div className="log-in__container">
            <header>
                <h1>Login</h1>
            </header>
            <RenderForm/>
        </div>
    )
}

