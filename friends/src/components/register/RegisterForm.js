import React from 'react';

// FORMIK AND YUP VALIDATION
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';

const RegisterForm = ({values, touched, errors, validateField}) => {
  // NOTE: FORMIK DOES NOT WORK WITH STATE

  // USING FORMIK'S VALIDATION FOR CONFIRMING PASSWORD
  const validatePassword = value => {
    let error;
    if (value !== values.password){
      error = 'passwords must match'
    }
    return error
  }

  return(
    <div>
      Hello RegisterForm!
      <Form>
        <label className='usernameContainer'>
          <Field
            name='username'
            placeholder='username'
            type='text'
            component={TextField}
            variant="outlined"
            margin='dense'
            helperText={(touched.username && errors.username) && errors.username}
          />
        </label>
        <label className='passwordContainer'>
          <Field
            name='password'
            placeholder='password'
            type='password'
            component={TextField}
            variant="outlined"
            margin='dense'
            helperText={(touched.password && errors.password) && errors.password}
          />
        </label>
        <label className='confirmPasswordContainer'>
          <Field
            name='confirmPassword'
            validate={validatePassword}
            placeholder='confirmPassword'
            type='password'
            component={TextField}
            variant="outlined"
            margin='dense'
            helperText={(touched.confirmPassword)}
          />
        </label>
        <Button type='submit' onClick={() => validateField('confirmPassword')}>Submit</Button>
      </Form>
    </div>
  )
}

// SETTING UP FORMIK VALUES, VALIDATION, AND SUBMISSION
const FormikRegisterForm = withFormik({
  mapPropsToValues({username, password, confirmPassword}
  ) {
      return {
        username: username || '',
        password: password || '',
        confirmPassword: confirmPassword || ''
      }
  },

  validationSchema: Yup.object().shape({
		username: Yup.string()
			.required('username is required'),
		password: Yup.string()
			.min(6, 'password must be at least 6 characters long')
      .required('password is required'),
    confirmPassword: Yup.string()
      .required('confirm password')
  }),

  handleSubmit(values, {props}){
    props.registerUser(values, props.history)
  }

})(RegisterForm)

export default FormikRegisterForm;

