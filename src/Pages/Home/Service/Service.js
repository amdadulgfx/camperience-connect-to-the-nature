import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css'
const Serivice = (props) => {
    const { title, img, description } = props.service;
    return (
        <div>
            <Col>
                <Card className='text-center'>
                    <Card.Img variant="top" src={img} className='card-img' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='description'>
                            {description.slice(0, 100)}...
                        </Card.Text>
                        <Button className='button-color border-0'>REGISTER FOR CAMP</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Serivice;