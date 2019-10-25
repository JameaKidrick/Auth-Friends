import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';

const RegisterForm = ({values, registerSubmit, credentials, setCredentials}) => {

  const handleChange = e => {
    // setCredentials(values)
    console.log('hey')
  };

  return(
    <div>
      Hello RegisterForm!
      {/* {console.log(handleChange)} */}
      {/* {console.log(values)} */}
      <Form onSubmit={registerSubmit}>
        <Field
        name='username'
        placeholder='username'
        type='text'
        onChange={handleChange}
        component={TextField}
        variant="outlined"
        margin='dense'
        />
        <Field
        name='password'
        placeholder='password'
        type='text'
        onChange={handleChange}
        component={TextField}
        variant="outlined"
        margin='dense'
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({username, password}
  ) {
      return {
        username: username || '',
        password: password || ''
      }
  },
})(RegisterForm)

export default FormikRegisterForm;

