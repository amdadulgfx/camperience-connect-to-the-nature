import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Serivice = (props) => {
    const { _id, title, img, description } = props.service;
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
                        <Link to={`/registerCamp/${_id}`}>
                            <Button className='button-color border-0'>REGISTER FOR CAMP</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Serivice;