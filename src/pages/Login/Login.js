import React from 'react'
import {Helmet} from 'react-helmet'
import './Login.css'
import { animate, motion } from 'framer-motion';

function Login() {
    return (
    <motion.div className='Login'
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1.5}}}
    exit={{opacity: 0}}>
        <Helmet>
                <script src="../../javascripts/LoginScript.js"></script>
        </Helmet>
        <div className = "Login-form ">
            <div className = "form__title">
                <h1>Login</h1>
            </div>
            <div class="form__message"></div>
            <div className = "form__input-group">
                <input type="username" id="username" className="form__input" placeholder="Username or Email" />
                <div className='form__input-error--message '></div>
                <input type="password" id="password" className="form__input" placeholder="Password" />    
                <div className='form__input-error--message '></div>
            </div>

            <button type="submit" className = "form__button">Continue</button>
            <p className="form__text">
                <a className="form__link" href="./register" id="linkCreateAccount">Don't have an account? Register here.</a>
            </p>
            <p className="form__text">
                <a className="form__link" href="./forget" id="linkForgetPassword">Forgot your password?</a>
            </p>
        </div>
    </motion.div>
  )
  
}

export default Login