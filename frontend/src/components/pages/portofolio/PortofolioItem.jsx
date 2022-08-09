import React, { useState } from "react";
import "./Portofolio.css";
import AOS from 'aos'

const PortfolioItem = (props) => {

    useState(() => {
        AOS.init({duration:2000})
    }, [])

    const { img, liveUrl } = props.item;
    return (
        <div className="project__box pointer relative" data-aos="zoom-in-right" data-aos-delay="1000 + i * 10" key='i'>
            <div className="project__box__img pointer relative">
                <div className="project__img__box">
                    <a href={liveUrl} target='_blank' rel="noreferrer"><img src={img} alt="" className="project__img" /></a>
                </div>
                <div className="mask__effect"/>
            </div>
        </div>
    );
};

export default PortfolioItem;
