import React, { useEffect } from "react"
import AOS from 'aos'
import { Container, Row, Col } from "reactstrap"

import img01 from "../../assets/images/img-01.jpg"
import img02 from "../../assets/images/img-02.jpg"
import img03 from "../../assets/images/img-03.jpg"
import img04 from "../../assets/images/about.jpg"

import "./About.css"
const About = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <section id="about" className="about__main">
            <h1 className="about__h1"><span className="about__span">About&nbsp;</span>Me</h1>
            <Container>
                <Row>
                <Col lg="6" className='about__content'>
                    <p className="about__isi" data-aos="fade-right">
                        Hi my name is Aulia Ikhsan Tirta, I am a 21 years old professional Video Editor & Videographer from Magelang, Central Java, Indonesia ! 
                        I learned self-taught "video editing.I started my own business as an editor and now work as a freelancer for several clients.  

                        When I’m not not in my editing suite, I love to travel around the world and capture the moments in short cinematic videos, which I share on my Instagram.
                    </p>

                    <div className=" d-flex align-items-center gap-5">
                    <div>
                        <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal" data-aos="fade-right">
                        <span className='about__icon'>
                            <i className="ri-checkbox-circle-line"></i>
                        </span>
                        Content Creation
                        </h6>

                        <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal" data-aos="fade-right">
                        <span className='about__icon'>
                            <i className="ri-checkbox-circle-line"></i>
                        </span>
                        High Quality
                        </h6>
                    </div>

                    <div>
                        <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal" data-aos="fade-right">
                        <span className='about__icon'>
                            <i className="ri-checkbox-circle-line"></i>
                        </span>
                        Creative Idea
                        </h6>

                        <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal" data-aos="fade-right">
                        <span className='about__icon'>
                            <i className="ri-checkbox-circle-line"></i>
                        </span>
                        Video Production
                        </h6>
                    </div>
                    </div>
                </Col>

                <Col lg="6">
                    <div
                    className='about__img__gallery d-flex gap-4 justify-content-end'
                    >
                    <div className=" d-flex flex-column mb-3">
                        <div
                        className='about__img about__img__box'
                        >
                        <img src={img01} alt="about-img" data-aos="fade-right"/>
                        </div>

                        <div
                        className='about__img about__img__box'
                        >
                        <img src={img02} alt="about-img" data-aos="fade-right"/>
                        </div>
                    </div>

                    <div className=" d-flex flex-column mb-3">
                        <div
                        className='about__img about__img__box'
                        >
                        <img src={img03} alt="about-img" data-aos="fade-left"/>
                        </div>

                        <div
                        className='about__img about__img__box'
                        >
                        <img src={img04} alt="about-img" data-aos="fade-left"/>
                        </div>
                    </div>
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
