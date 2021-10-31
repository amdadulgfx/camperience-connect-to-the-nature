import React, { useEffect } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationArrow, faTag } from '@fortawesome/free-solid-svg-icons'

const Serivice = (props) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { _id, title, img, description, price, location, duration } = props.service;
    return (
        <div>
            <Col>
                <div data-aos="fade-up" data-aos-delay="500"
                >

                    <Card  >
                        <Card.Img variant="top" src={img} className='card-img' />
                        <Card.Body>
                            <Card.Title className='text-center'>{title}</Card.Title>
                            <Card.Text className='description '>
                                {description?.slice(0, 100)}...
                            </Card.Text>
                            <p className='location'><FontAwesomeIcon icon={faLocationArrow} /> {location}</p>
                            <div className='d-flex justify-content-between'>
                                <p><FontAwesomeIcon icon={faClock} /> {duration}</p>
                                <p><FontAwesomeIcon icon={faTag} /> ${price}</p>
                            </div>
                            <div className='text-center'>

                                <Link to={`/registerCamp/${_id}`}>
                                    <Button className='button-color border-0'>REGISTER FOR CAMP</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </div>
    );
};

export default Serivice;