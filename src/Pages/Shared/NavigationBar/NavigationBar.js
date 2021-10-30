import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavigationBar.css'
const NavigationBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg" className='text-white nav-sticky'>
                <Container>
                    <Navbar.Brand href="#home"><b> <span>CAMP</span><span style={{ color: '#637F42' }}>ERIENCE</span> </b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Link to="/home" className='text-decoration-none text-dark '>HOME</Link>
                            <Link to="/gallery" className='text-decoration-none text-dark 
                            ps-2'>GALLERY</Link>
                            <Link to="/contact" className='text-decoration-none text-dark 
                            ps-2'>CONTACT</Link>
                        </Nav>
                        <Nav>
                            {
                                user.email ? <div> <span className='text-success'>Hello, {user.displayName} </span> <Link to="/" onClick={logOut} className='text-decoration-none text-dark'>Log Out</Link> </div> : <Link to="/login" className='text-decoration-none text-dark'>Log In</Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;