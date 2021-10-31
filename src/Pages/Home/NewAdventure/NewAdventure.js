import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './NewAdventure.css';

const NewAdventure = () => {
    const [seconds, setSeconds] = useState(60)


    const timer = setTimeout(function () {
        const countDown = seconds - 1;
        setSeconds(countDown)
    }, 1500);
    // timer();


    if (seconds === 0) {
        clearTimeout(timer);


    }


    return (
        <div className='bg-img text-center text-white p-5'>
            <h1 className='fw-bolder'>NEW ADVENTURES BEGIN IN</h1>
            <Row>
                <Col className='d-flex flex-column fs-1 fw-bolder'>
                    <div>20 <small>DAYS</small></div>
                    <div>17 <small>HOURS</small></div>
                    <div>19 <small>MINUTES</small></div>
                    <div>{seconds} <small>SECONDS</small></div>
                </Col>
            </Row>
        </div>
    );
};

export default NewAdventure;