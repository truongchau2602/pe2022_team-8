import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Bookstore from './pages/Bookstore/Bookstore';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import {AnimatePresence , motion} from "framer-motion";
import AnimatedRoutes from './components/AnimatedRoutes';
import "swiper/css/bundle";

function App() {
  return (  
    <Router>
      <Nav></Nav>
      <AnimatedRoutes></AnimatedRoutes>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;
