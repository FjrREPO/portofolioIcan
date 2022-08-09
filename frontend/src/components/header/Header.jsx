import React, { useRef, useEffect } from "react";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    const headerRef = useRef(null);

    const menuRef = useRef(null);

    const headerFunc = () => {
        if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
        ) {
        headerRef.current.classList.add('header__shrink');
        } else {
        headerRef.current.classList.remove('header__shrink');
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);

        return () => window.removeEventListener("scroll", headerFunc);
    }, []);

    const toggleMenu = () =>
        menuRef.current.classList.toggle('menu__active');

    return (
        
        <header className='header' ref={headerRef}>
            <div className='nav__wrapper'>
            {/* ======== navigation logo ======== */}
            <div className='logo'>
                <h1>
                    WithTirta
                </h1>
            </div>

            {/* ========= nav menu =========== */}
            <div
                className='navigation'
                ref={menuRef}
                onClick={toggleMenu}
            >
                <div className='nav__menu'>
                    <ScrollLink to='home' className='header__men' smooth={true} duration={50}>
                        Home
                    </ScrollLink>
                    <ScrollLink to='about' className='header__men' smooth={true} duration={50}>
                        About
                    </ScrollLink>
                    <ScrollLink to='services' className='header__men' smooth={true} duration={50}>
                        Services
                    </ScrollLink>
                    <ScrollLink to='portofolio' className='header__men' smooth={true} duration={50}>
                        Portofolio
                    </ScrollLink>
                    <ScrollLink to='contact' className='header__men' smooth={true} duration={50}>
                        Contact
                    </ScrollLink>
                    <a href='/admin' className='header__men' target='_blank'>
                        Login
                    </a>
                </div>
            </div>

            <span className='mobile__menu'>
                <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            </div>
        </header>
        
    );
};

export default Header;
