import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Services.css";
import ServicesItem from "./ServicesItem";
import AOS from 'aos'

const Services = () => {

    useState(() => {
        AOS.init({duration:2000})
    }, [])

    return (
        <section id="services">
            <div className="services__background">
                <div className="services__heading">
                    <h1 className="services__headingh1">My&nbsp;<span className="services__headingspan">Services</span></h1>
                </div>
                <Container>
                    <Row>
                    <Col lg="6" md="6">
                        <div className='services__container'>
                        <div>
                            <ServicesItem title="Videographer" icon="ri-vidicon-2-line" />
                            <ServicesItem title="Photographer" icon="ri-camera-lens-line" />
                        </div>
                        <ServicesItem
                            title="Editor"
                            icon="ri-image-edit-fill"
                        />
                        </div>
                    </Col>
                    <Col lg="6" md="6" className='service__title'>
                        <h3 className="mb-0 mt-4 up-teks" data-aos="fade-right"><span className="service__upspan">‟</span>Life is a</h3>
                        <h3 className="mb-4 bot-teks" data-aos="fade-left">Collection of Moments<span className="service__botspan">‚‚</span></h3>
                    </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Services;
