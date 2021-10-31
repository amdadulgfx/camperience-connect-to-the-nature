import React, { useEffect } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos';
const Serivice = (props) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { _id, title, img, description } = props.service;
    return (
        <div>
            <Col>
                <div data-aos="fade-up" data-aos-delay="500"
                >

                    <Card className='text-center' >
                        <Card.Img variant="top" src={img} className='card-img' />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text className='description'>
                                {description?.slice(0, 100)}...
                            </Card.Text>
                            <Link to={`/registerCamp/${_id}`}>
                                <Button className='button-color border-0'>REGISTER FOR CAMP</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </div>
    );
};

export default Serivice;