import './style.scss'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

function RenderForm() {
    return (
        <Form className="registrationForm">
            <FormGroup>
                <Label for="title">Post Title</Label>
                <Input type="text" id="title" name="title" placeholder="Post Title" required/>
            </FormGroup>
            <FormGroup>
                <Label for="description">Post Description</Label>
                <Input type="text" id="description" name="description" placeholder="Post Description" required/>
            </FormGroup>
            <FormGroup>
                <Label for="attachments">Attach Image</Label>
                <Input type="file" id="attachments" name="attachments" required/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" name="password" placeholder="Password" required/>
            </FormGroup>
            <FormGroup className="radioBtns">
                <Input type="radio" id="tos" name="tos" required/>
                <Label for="policy">I accept the Acceptable Use Policy for uploading images</Label>
            </FormGroup>
            <Button color="primary">Submit Post</Button>
        </Form>
    );
}

export default function PostImage() {
    return (
        <>
            <h1 className="postImgHeading">Post Image</h1>
            <RenderForm />
        </>
    );
}