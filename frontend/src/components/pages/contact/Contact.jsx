/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react"
import { Container, Row, Col } from "reactstrap"
import "./Contact.css"
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos'

const Contact = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <section id="contact" className='contact'>
            <div className="contact__heading">
                <h1 className="contact__h1">My&nbsp;<span className="contact__span">Contact</span></h1>
            </div>
        <Container>
            <Row>
            <Col lg="6" md="6">
                
                <h3 className="mt-4 mb-4 contact__headingg" data-aos="zoom-in">Contact with me</h3>

                <ul className='contact__info__list'>
                <li className='info__item'>
                    <a href='https://www.google.com/maps/place/Toko+Usaha+Mulia/@-7.6139287,110.3435819,18z/data=!4m5!3m4!1s0x2e7a601797e38c9d:0x85652ddb2a7b3316!8m2!3d-7.6139288!4d110.3442139' target='_blank' rel="noreferrer">
                    <span>
                    <i className="ri-map-pin-line"></i>
                    </span>
                    </a>
                    <a href='https://www.google.com/maps/place/Toko+Usaha+Mulia/@-7.6139287,110.3435819,18z/data=!4m5!3m4!1s0x2e7a601797e38c9d:0x85652ddb2a7b3316!8m2!3d-7.6139288!4d110.3442139' target='_blank' rel="noreferrer">
                    <p className="infoinfo">Central Java - Indonesia</p>
                    </a>
                </li>
                <li className='info__item'>
                    <a href='mailto: icanbejo@gmail.com' target='_blank' rel="noreferrer">
                    <span>
                    <i className="ri-mail-line"></i>
                    </span>
                    </a>
                    <a href='mailto: icanbejo@gmail.com' target='_blank' rel="noreferrer">
                    <p className="infoinfo">icanbejo@gmail.com</p>
                    </a>
                </li>
                <li className='info__item'>
                    <a href='https://wa.me/082134940056' target='_blank' rel="noreferrer">
                    <span>
                        <i className="ri-whatsapp-line"></i>
                    </span>
                    </a>
                    <a href='https://wa.me/082134940056' target='_blank' rel="noreferrer">
                    <p className="infoinfo">+62 82134940056</p>
                    </a>
                </li>
                </ul>

                <div className='social__as'>
                    <a href="https://www.youtube.com/channel/UCubgvc49DodUIwzBP0KU8YQ" target='_blank' rel="noreferrer">
                    <i className="contact__iconn"><FaYoutube className="contact__iconnyt"/></i>
                    </a>
                    <a href="https://facebook.com/auliaikhsantirta" target='_blank' rel="noreferrer">
                    <i className="contact__iconn"><FaFacebook/></i>
                    </a>
                    <a href="https://www.instagram.com/withtirta/" target='_blank' rel="noreferrer">
                    <i className="contact__iconn"><FaInstagram/></i>
                    </a>
                    <a href="https://www.tiktok.com/@withtirta" target='_blank' rel="noreferrer">
                    <i className="contact__iconn"><FaTiktok/></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aulia-ikhsan-tirta-793b26206/" target='_blank' rel="noreferrer">
                    <i className="contact__iconn"><FaLinkedin/></i>
                    </a>
                </div>
            </Col>

            <Col lg="6" md="6">
                {/* <Form /> */}
            </Col> 
            </Row>
        </Container>
        </section>
    )
}

export default Contact
