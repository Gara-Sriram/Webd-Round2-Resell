import React from 'react'

const LoginPage = () => {
  return (
    <div className='Login'>
      <div className='L-content'>
        <form className='L-form'>
        
   
       
        <input placeholder='Email'  type='email'></input>
       
        <input placeholder='Password'  type='password'></input>
        <button type='submit'>Login</button>
        </form>
      <a  href='/register'>Don't have an account? Sign In Here</a>
        
      </div>
    </div>
  )
}

export default LoginPage
