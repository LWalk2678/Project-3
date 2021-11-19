import { useState } from 'react';
import './SignUp.css';
import { signUp } from '../../services/users.js';
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components'

const SignUp = (props) => {

  const history = useHistory();

  const [form, setForm] = useState(
    {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      isError: false,
      errorMsg: '',
    }
  )

  const handleChange = (ev) =>
  setForm({
    ...form,
    [ev.target.name]: ev.target.value,
  })

  const onSignUp = async (ev) => {
    ev.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        pasword: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid'
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : '';
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return (
        <button type='submit'>Sign Up</button>
      )
    }
  }

  const { username, email, password, passwordConfirmation } = form


  return (
    <Layout user={props.user}>
      <div className='form-container'>
        <h3>Sign Up</h3>
        <form onSubmit={onSignUp}>
          <div className='inputs'>
            <div className='label-input'>
              <label>Username: </label>
              <input
                required
                type='text'
                name='username'
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className='label-input'>
              <label>Email address: </label>
              <input
                required
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className='label-input'>
              <label>Password: </label>
              <input
                required
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className='label-input'>
              <label>Password Confirmation: </label>
              <input
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                type='password'
                onChange={handleChange}
              />
            </div>
          </div>         
          {renderError()}
        </form>
      </div>
    </Layout>
  )
}

export default SignUp
