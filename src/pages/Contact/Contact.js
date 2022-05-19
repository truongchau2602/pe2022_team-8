import React from 'react'
import './contact.css';
import { animate, motion } from 'framer-motion';
function Contact() {
  return (
    <motion.div className='contact'
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1.5}}}
    exit={{opacity: 0}}>
        <h1 className='contact-header'>For More Info <br></br> <span>CONTACT US</span></h1>
        <div className='image-wrapper-outer'>
            <div className='image-wrapper-inner'>
                <div className='image-wrapper-form'>
                    <div className='image-wrapper-form-info'>
                        <div className='image-wrapper-form-info-item'>
                            <h1>Store 01</h1>
                            <p className='address'>Address <br></br>500 Terry Francois St. <br></br> SF, CA 94158</p>
                            <p className='tel'>Tel <br></br>123-456-7890</p>
                            <p className='mail'>Email <br></br>info@my-domain.com</p>
                        </div>
                        <div className='image-wrapper-form-info-item'>
                            <h1>Store 02</h1>
                            <p className='address'>Address <br></br>500 Terry Francois St. <br></br> SF, CA 94158</p>
                            <p className='tel'>Tel <br></br>123-456-7890</p>
                            <p className='mail'>Email <br></br>info@my-domain.com</p>
                        </div>
                        <div className='image-wrapper-form-info-item'>
                            <h1>Customer Service</h1>
                            <p className='tel'>Tel <br></br>1-800-000-0000</p>
                            <p className='mail'>Email <br></br>info@my-domain.com</p>
                        </div>
                    </div>

                    <div className='image-wrapper-form-input'>
                        <input type="text" id="fname" placeholder='Name'></input>
                        <input type="text" id="fmail" placeholder='Email'></input>
                        <textarea placeholder='Type your message here..' rows = "4"></textarea>
                        <input type="submit" className='submit' value="Submit"></input>
                    </div>
                </div>

                
            </div>
        </div>
    </motion.div> 
  )
}

export default Contact