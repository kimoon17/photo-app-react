const signUpValidator = values => {
    const errors = {}
    if (!values.username) {
      errors.username = "Required"
    }

    if (!values.password) {
      errors.password = "Required"
    }

    if (values.cpassword && !values.cpassword) {
      errors.cpassword = "Required"
    }

    if (values.cpassword && values.cpassword.length < 6) {
      errors.cpassword = "Pass too short"
    }

    if (values.password && values.password.length < 6) {
      errors.password = "Pass too short"
    }
    if (values.cpassword && (values.password !== values.cpassword) ) {
      errors.cpassword = "Pass and Cpass don't match"
    }

    if (values.checkage && !values.checkage) {
      errors.checkage = "You have to check this field"
    }

    if (values.tos && !values.tos) {
      errors.tos = "You have to check this field"
    }

    return errors
}

module.exports = {signUpValidator}