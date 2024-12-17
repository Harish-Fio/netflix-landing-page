import React from 'react';
import './sign.css';
import { Link } from 'react-router-dom'
import Images from './Image/Netflix_Logo_RGB.png';
import Signabout from './Signabout';

function Login() {
  return (
    <>
    <div className='login-header'>
      <img src={Images} alt='' />
      <div className='login-border'>
        <form>
          <ul>
            <h1>Sign In</h1>
            <li><input className='login-input' type='text' placeholder='Email or Mobile number' required /></li>
            <li><input className='login-input' type='password' placeholder='Password' required /></li>
            <button className='btn-1'>Sign In</button>
            <p className='or'>OR</p>
            <button className='btn-2'>Use a Sign-in-code</button>
            <li><Link className='forgot' to='/forgotpassword'>Forgot Password?</Link></li>
          </ul>
          <p className='remember'><input id='rem-box' type='radio'></input>Remember me</p>
          <h4>New to Netflix?<Link className='sign-up' to='/'>Sign up Now.</Link></h4>
          <span>
            <p className='learn'>This page is protected by Google reCAPTCHA to ensure you're not a bot,<Link className='learn-more' to='/learnmore'>Learn more.</Link></p>
          </span>
        </form>
      </div>
    </div>
    <Signabout/>
    </>
  )
}

export default Login;