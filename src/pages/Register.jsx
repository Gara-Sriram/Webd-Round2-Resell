import React from 'react'

const Register = () => {
  return (
    <div className='register'>
      <div className='L-content'>
        <form className='L-form'>
        <input placeholder='Name' type='text' />
        <input placeholder='Email'  type='email'></input>
       
        <input placeholder='Password'  type='password'></input>
        <button type='submit'>Register</button>
        </form>
      <a  href='/login'>Already have an account? Log In Here</a>
        
      </div>
    </div>
  )
}

export default Register
