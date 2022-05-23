import React from 'react'
import './Register.css'
import { animate, motion } from 'framer-motion';

function Register() {
  return (
    <motion.div className='Register'
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1.5}}}
    exit={{opacity: 0}}>
      <div className='Register-wrapper'>
          <div className = "form__title">
              <h1>Register</h1>
          </div>
          <div className = "form__input-group">
              <input type="username" className="form__input" placeholder="Username" />
              <div className='form__input-error--message '></div>
              <input type="email" className="form__input" placeholder="Email" />
              <div className='form__input-error--message '></div>
              <input type="password" className="form__input" placeholder="Password" />
              <div className='form__input-error--message '></div>
              <input type="password" className="form__input" placeholder="Confirm Password" />
              <div className='form__input-error--message '></div>
          </div>
          <button className = "form__button">Submit</button>
          <p className="form__text">
              <a className="form__link" href="./login" id="linkLogin">Already have an account? Login here.</a>
          </p>
      </div>
    </motion.div>
  )
}

export default Register