import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container className='mb-5'>
            <h1 className='my-5 text-center'>An amazing camping experience for new generations with everyday activities</h1>
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