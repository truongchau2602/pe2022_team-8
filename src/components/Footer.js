import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        {/* title */}
        <div className='footer-title'>
          <h1>Tick Tack Publishers.</h1>
        </div>
        <div className='footer-title'>
          <h1>Shop</h1>
        </div>
        <div className='footer-title'>
          <h1>Socials</h1>
        </div>
        <div className='footer-title'>
          <h1>Be the First to Know</h1>
        </div>

        {/* content */}
        <div className='footer-content'>
          <p>
          500 Terry Francois St. <br></br>
          San Francisco, CA 94158 <br></br>
          123-456-7890 <br></br>
          info@my-domain.com
          </p>
        </div>
        <div className='footer-content2'>
          <div className='footer-content2-wrapper'>
            <a href='#'>FAQ</a>
            <a href='#'>Shipping & Returns</a>
            <a href='#'>Store Policy</a>
            <a href='#'>Payment Methods</a>
          </div>
          
        </div>
        <div className='footer-content2'>
          <div className='footer-content2-wrapper'>
            <a href='#'>Facebook</a>
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
            <a href='#'>Pinterest</a>
          </div>
          
        </div>
        {/* copyright */}
        <div className='footer-content3'>
          <p>
          © 2022 by TickTack. Publishers
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer