import React from 'react';

// FORMIK AND YUP VALIDATION
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';

const LoginForm = ({touched, errors}) => {
  return (
    <div>
      Hello LoginPage!
      <Form>
        <label>
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
        <label>
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
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

// SETTING UP FORMIK VALUES, VALIDATION, AND SUBMISSION
const FormikLoginForm = withFormik({
  mapPropsToValues({username, password}
  ) {
      return {
        username: username || '',
        password: password || ''
      }
  },

  validationSchema: Yup.object().shape({
		username: Yup.string()
			.required('username is required'),
		password: Yup.string()
      .required('password is required'),
  }),

  handleSubmit(values, {props}){
    props.loginUser(values, props.history)
  }

})(LoginForm)

export default FormikLoginForm;