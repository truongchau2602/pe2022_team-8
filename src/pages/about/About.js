import React from 'react'
import './about.css'
import { animate, motion } from 'framer-motion';

function About() {
  return (
    <motion.div className='about'
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1.5}}}
    exit={{opacity: 0}}
    
    >
        <h1 className='about-header'>Our <br></br> <span>Story</span></h1>
        <div className='image-wrapper-outer'>
          <div className='image-wrapper-inner'>            
          </div>
          <div className='content-outer'>
            <div className='content-inner'>
              <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. 
<br></br><br></br>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
              </p>
            </div>
          </div>
        </div>
    </motion.div>
   
  )
}

export default About