import React from 'react'
import './Forget.css'
import { animate, motion } from 'framer-motion';

function Forget() {
  return (
    <motion.div className='Forget'
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1.5}}}
    exit={{opacity: 0}}>
     <div className='Forget-wrapper'>
        <div className = "form__title">
            <h1>Forgot Your Password ? </h1>
        </div>
        <div className = "form__input-group">
            <input type="email" className="form__input" placeholder="Email" />
            <div className='form__input-error--message '></div>
        </div>
        <button className = "form__button">Submit</button>
        <p className="form__text">
            <a className="form__link" href="./login" id="linkLogin">Back to sign in.</a>
        </p>
      </div>
    </motion.div>
  )
}

export default Forget