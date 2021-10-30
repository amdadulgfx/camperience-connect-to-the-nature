import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './NewAdventure.css';

const NewAdventure = () => {
    return (
        <div className='bg-img text-center text-white p-5'>
            <h1>NEW ADVENTURES BEGIN IN</h1>
            <Row>
                <Col><h2>20 <small>DAYS</small> 17 <small>HOURS</small> 19 <small>MINUTES</small></h2></Col>
            </Row>
        </div>
    );
};

export default NewAdventure;