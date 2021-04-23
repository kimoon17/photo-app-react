import './style.scss'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

function RenderForm() {
    return (
        <Form className="registrationForm">
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" id="username" name="username" placeholder="Username" required/>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" name="email" placeholder="Email" required/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" name="password" placeholder="Password" required/>
            </FormGroup>
            <FormGroup>
                <Label for="cpassword">Confirm Password</Label>
                <Input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" required/>
            </FormGroup>
            <FormGroup className="radioBtns">
                <Input type="radio" id="checkage" name="checkage" required/>
                <Label for="checkage">I am at least 13 years of age</Label>
            </FormGroup>
            <FormGroup className="radioBtns">
                <Input type="radio" id="tos" name="tos" required/>
                <Label for="tos">I accept the tos & privacy rules</Label>
            </FormGroup>
            <Button color="primary">Sign Up</Button>
        </Form>
    );
}

export default function SignUp() {
    return (
        <>
            <header>
                <h1 className="registrationHeading">Register</h1>
            </header>

            <RenderForm />
        </>
    )
}