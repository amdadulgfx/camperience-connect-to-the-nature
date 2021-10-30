import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div style={{ backgroundColor: '#1C231F', color: "white", padding: '20px 0px' }}>
            <Container>
                <Row xs={1} md={3}>
                    <Col>
                        <h4>Contact</h4>
                        <p>Phone: 564-865-952</p>
                        <p>Email: hello@camperience.com</p>
                        <p>Address: 173, Tally Street, Barmingham</p>
                    </Col>
                    <Col>
                        <h4>About</h4>
                        <Link className='text-decoration-none text-white fw-bold' to='/'>Previous Tours</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/services'>Services</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/departments'>Departments</Link> <br />

                        <Link className='text-decoration-none text-white fw-bold' to='/about'>About Us</Link>
                    </Col>
                    <Col>
                        <h4>Explore</h4>
                        <Link className='text-decoration-none text-white fw-bold' to='/blog'>Blog</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/appointment'>Activities</Link> <br />

                        <Link className='text-decoration-none text-white fw-bold' to='/portfolio'>Portfolio</Link> <br />
                    </Col>

                </Row>
            </Container>
            <hr />
            <p className='text-center pt-3'>Copyright ©2021 CAMPERIENCE Designed By AmdadulGFX</p>
        </div>

    );
};

export default Footer;