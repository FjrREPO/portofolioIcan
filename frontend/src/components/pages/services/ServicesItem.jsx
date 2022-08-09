import React, { useState } from "react";
import AOS from 'aos'
import "./Services.css";

const ServicesItem = ({ title, icon }) => {

    useState(() => {
        AOS.init({duration:2000})
    }, [])

    return (
        <div className='service__item' data-aos="fade-right">
        <span>
            <i className={icon}></i>
        </span>

        <h5>{title}</h5>
        </div>
    );
};

export default ServicesItem;
