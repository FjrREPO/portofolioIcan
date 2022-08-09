import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Service from './components/pages/services/Services';
import Portofolio from './components/pages/portofolio/Portofolio';
import Contact from './components/pages/contact/Contact';
import Footer from './components/footer/Footer';
import "remixicon/fonts/remixicon.css";
import 'aos/dist/aos.css'

const MainPage = () => {
    return (
        <div className='App'>
        <Header />
        <Home />
        <About />
        <Service />
        <Portofolio />
        <Contact />
        <Footer />
        </div>
    );
}

export default MainPage;
