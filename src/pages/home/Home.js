import React from 'react'
import {Link} from 'react-router-dom';
import { animate, motion } from 'framer-motion';

import Nav from '../../components/Nav';
import cover from '../../assets/yellow-cover.jpg';
import './home.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from "swiper";
import book1 from '../../assets/book1.webp'
import book2 from '../../assets/book2.webp'
import book3 from '../../assets/book3.webp';
import book4 from '../../assets/book4.webp';
import book5 from '../../assets/book5.webp';
import book6 from '../../assets/book6.webp';
import book7 from '../../assets/book7.webp';
import book8 from '../../assets/book8.webp';
import book9 from '../../assets/book9.webp';
import upcoming from '../../assets/upcoming.webp';
import './swiper.css';


function Home() {
  return (
    <motion.div className='home'
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 1.5}}}
      exit={{opacity: 0}}
    >
      <div className='header-wrapper'>
        <img src={cover} alt=""></img>
        <h1>"TODAY A READER, <br></br> TOMORROW A LEADER."</h1>
      </div>
      <div className='best-sellers'>
          <h1>Best Sellers</h1>
          <div className='best-sellers-wrapper'>         
          <Swiper 
            navigation ={true} modules = {[Navigation]}
            slidesPerView={6}
            slidesPerGroup= {1}
            loopFillGroupWithBlank={true}
            spaceBetween={20}
            className='swiper1'
            loop={true}
          >
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book1} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book2} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book3} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book4} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book5} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book6} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book8} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book9} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>

          </Swiper>


          <h1>Recommended Books</h1>


          <Swiper 
            navigation ={true} modules = {[Navigation]}
            slidesPerView={6}
            slidesPerGroup= {1}
            loopFillGroupWithBlank={true}
            spaceBetween={20}
            className='swiper2'
            loop={true}
          >
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book1} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book2} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book3} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book4} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book5} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book6} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book8} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide'>
                <div className='item'>
                  <div className='image'>
                    <img src={book9} alt=''></img>
                  </div>
                  <div className='content'>
                    <h2 className='title'>I'm a product</h2>
                    <h2 className='price'>$20.00</h2>
                  </div>
                </div>
              </SwiperSlide>

          </Swiper>

          <h1 className='transition'>There's no <br></br>such things as too <br></br> many books</h1>
          <Link to = "/about" className='read'>Read Our Story</Link>
          </div>
      </div>

      <div className='book-launch'>
        <h1>Coming Soon</h1>
        <div className='book-launch-wrapper'>
        <div className='book-launch-wrapper-left'>
            <h1>Introducing The Land of AILOO</h1>
            <p className='author'>By Mark Walker</p>
            <p className='date'>When <br></br> Jul 12, 2023, 7:00 PM</p>
            <p className='location'>Where<br></br>500 Terry A Francois Blvd, San Francisco, CA 94158, USA</p>
            <a href='#'>Check Out Now</a>
        </div>

          <div className='book-launch-wrapper-right'>
            <div className='image-outer'>
              <div className='image-inner'>
                <img src={upcoming} alt = ''></img>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home