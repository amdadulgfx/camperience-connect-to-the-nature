import React from 'react';

import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import useCampService from '../../../hooks/useCampService';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useCampService();
    const { isLoading } = useAuth();
    const topServices = services.slice(0, 6);
    if (isLoading) {
        return <div className='d-flex justify-content-center align-items-center' style={{ height: '500px' }}> <Spinner animation="border" variant="primary" /> </div>

    }
    return (
        <Container className='mb-5'>
            <h1 className='my-5 text-center'>An amazing camping experience for new generations with everyday activities</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    topServices.map(service => <Service
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