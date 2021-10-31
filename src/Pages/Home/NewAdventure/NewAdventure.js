import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './NewAdventure.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewAdventure = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='bg-img text-center text-white p-5' data-aos="fade-up">
            <h1 className='fw-bolder'>NEW ADVENTURES BEGIN IN</h1>
            <Row>
                <Col className='d-flex flex-column fs-1 fw-bolder'>
                    <div>20 <small>DAYS</small></div>
                    <div>17 <small>HOURS</small></div>
                    <div>19 <small>MINUTES</small></div>
                    <div>60 <small>SECONDS</small></div>
                </Col>
            </Row>
        </div>
    );
};

export default NewAdventure;