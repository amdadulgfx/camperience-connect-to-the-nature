import React, { useEffect } from 'react';

import { Container, Row, Spinner } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';
import useCampService from '../../../hooks/useCampService';
import Service from '../Service/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    const { services, isLoading } = useCampService();

    useEffect(() => {
        AOS.init();
    }, [])
    if (isLoading) {
        return <div className='d-flex justify-content-center align-items-center' style={{ height: '500px' }}> <Spinner animation="border" variant="primary" /> </div>

    }
    return (
        <Container className='mb-5' data-aos="fade-up"  >
            <h1 className='my-5 text-center'>An amazing <span style={{ color: '#637F42' }}>camping experience</span>  for new generations with everyday activities</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.title}
                        service={service}
                    >

                    </Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;