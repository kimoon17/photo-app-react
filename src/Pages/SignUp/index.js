import './style.scss'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import {Formik} from 'formik'

function RenderForm() {
  return (
    <Formik
      initialValues={{username: '', password: '', cpassword: '', checkage: false, tos: false}}
      validate={values => {
        const errors = {}
        if (!values.username) {
          errors.username = "Required"
        }

        if (!values.password) {
          errors.password = "Required"
        }

        if (!values.cpassword) {
          errors.cpassword = "Required"
        }

        if (values.cpassword.length < 6) {
          errors.cpassword = "Pass too short"
        }

        if (values.password.length < 6) {
          errors.password = "Pass too short"
        }
        if (values.password !== values.cpassword) {
          errors.cpassword = "Pass and Cpass don't match"
          errors.password = "Pass and Cpass don't match"
        }

        if (!values.checkage) {
          errors.checkage = "You have to check this field"
        }

        if (!values.tos) {
          errors.tos = "You have to check this field"
        }

        return errors
      }}
      onSubmit={(values, {setSubmitting}) => {
        console.log(values) // checkage and tos will be true
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
        <Form className="registrationForm" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username <span className="error">{errors.username && touched.username && errors.username}</span></Label>
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
            <Label for="password">Password <span className="error">{errors.password && touched.password && errors.password}</span></Label>
            <Input type="password" id="password" name="password" placeholder="Password" required onChange={handleChange} onBlur={handleBlur} value={values.password}/>
          </FormGroup>
          <FormGroup>
            <Label for="cpassword">Confirm Password <span className="error">{errors.cpassword && touched.cpassword && errors.cpassword}</span></Label>
            <Input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" required onChange={handleChange} onBlur={handleBlur} value={values.cpassword}/>
          </FormGroup>
          <FormGroup className="radioBtns">
            <Input type="radio" id="checkage" name="checkage" required onChange={handleChange} onBlur={handleBlur} value={values.checkage}/>
            <Label for="checkage">I am at least 13 years of age <span className="error">{errors.checkage && touched.checkage && errors.checkage}</span></Label>
          </FormGroup>
          <FormGroup className="radioBtns">
            <Input type="radio" id="tos" name="tos" required onChange={handleChange} onBlur={handleBlur} value={values.tos}/>
            <Label for="tos">I accept the tos & privacy rules <span className="error">{errors.tos && touched.tos && errors.tos}</span></Label>
          </FormGroup>
          <Button disabled={isSubmitting} color="primary">Sign Up</Button>
        </Form>
      )}
    </Formik>
  )
}

export default function SignUp() {
  return (
    <>
      <header>
        <h1 className="registrationHeading">Register</h1>
      </header>

      <RenderForm/>
    </>
  )
}