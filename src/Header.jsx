import React from 'react';
import Images from './Image/Netflix_Logo_RGB.png';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {  Link } from 'react-router-dom';
import Content from './Content';
import Morereason from './Morereason';
import Faq from './Faq';
import About from './About';



function Header() {
  return (
    <>
    <div className='header'>

      <nav className='header-logo'>
        <img src={Images} alt='' />
        <div className='btn'>
          <select className='lan-btn' >
            <option value="english">English</option>
            <option value="tamil">Tamil</option>
          </select>
            <Link className='sign-btn' to='/login'>Sign In</Link>
        </div>
      </nav>

      <div className='content'>
        <h1>Unlimited movies, TV shows and more</h1>
        <h5>Starts at ₹149. Cancel anytime.</h5>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='inputbox'>
          <form>
            <input type='email' placeholder='Email address' required />
            <button type='submit'>Get Started <FontAwesomeIcon icon={faAngleRight} /></button>
          </form>
        </div>
      </div>
    </div>
    <Content />
        <Morereason />
        <Faq />
        <About />
    </>
  )
}

export default Header;