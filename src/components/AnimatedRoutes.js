import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/Contact/Contact';
import Bookstore from '../pages/Bookstore/Bookstore';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Forget from '../pages/Forget/Forget';

import {AnimatePresence} from 'framer-motion'
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    <Route path = "/" element={<Home></Home>}/>
                    <Route path = "/about" element={<About></About>}/>
                    <Route path= "/contact" element= {<Contact></Contact>}/>
                    <Route path = "/bookstore" element={<Bookstore></Bookstore>}/>
                    <Route path = "/login" element={<Login></Login>}/>
                    <Route path = "/register" element={<Register></Register>}/>
                    <Route path = "/forget" element={<Forget></Forget>}/>
            </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes