import React from 'react';
import { Btn } from '../../components/Controls/Button/Button';
import History from '../../routes/History';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../css/Login.css'
import {connect} from 'react-redux'
import { fetchData } from '../../network/apis';
import { LOGIN_DISPATCH_FUNCTION } from '../../store/Login/LoginAction';

class Login extends React.Component {

  // this method is only to trigger route guards , remove and use your own logic
  // handleLogin = () => {
  //     localStorage.setItem('token','token');
  //     History.push('/')
  // }

  render() {
    return (
      <div className='text-center my-5'>
        <h1>Login Page</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={
            Yup.object({
              email: Yup.string().email("Invalid email address").required("Required"),
              password: Yup.string()
                .required("Required")
                // .matches(
                //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                // )
                // .min(8).max(16)

            })
          }
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(false);
              History.push('/needy')
              const token = await fetchData(values);
              this.props.LOGIN_DISPATCH()             
              localStorage.setItem('token', token);
              console.log(values)
            }, 400);
          }}
        >
          <div className='loginForm mx-auto col-lg-6'>
            <Form>
              <div className='row'>
                <div className='mb-2 mb-sm-3 mb-lg-4 col-sm-12 col-12'>
                  <div className='form-group mt-2'>
                    <Field name="email" className="form-control red" placeholder="Enter Email Id"></Field>
                    <div className='errormessage' style={{ color: "red" }} >
                      <ErrorMessage name="email" className='error' /></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='mb-2 mb-sm-3 mb-lg-4 col-sm-12 col-12'>
                  <div className='form-group mt-2'>
                    <Field name="password" type="password" className="form-control red" placeholder="Enter Password"></Field>
                    <div className='errormessage' style={{ color: "red" }} >
                      <ErrorMessage name="password" className='error' /></div>
                  </div>
                  {/* {response ? <></> : <div className='errormessage' style={{ color: "red" }} >
                    <ErrorMessage className='error'>Wrong</ErrorMessage>
                  </div> }   */}
                </div>
              </div>
              <div className='row'>
                <div className='mb-sm-3 mb-lg-4 col-sm-12 col-12'>
                  <button className="btn btn-primary btn-login text-light" type='submit' id='button'>Login</button>
                </div>
              </div>
            </Form>
          </div>
        </Formik>
        {/* <Btn text='Login' handleClick={this.handleLogin}/> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      login : state.login
  }
}

const mapDispatchToProps = (dispatch) => ({
  LOGIN_DISPATCH : payload => 
  {
    dispatch(LOGIN_DISPATCH_FUNCTION(payload));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);