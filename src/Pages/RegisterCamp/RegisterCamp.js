import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './RegisterCamp.css';
const RegisterCamp = () => {

    const { serviceId } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState({});
    const { register, handleSubmit, setFocus, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/registrations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Registration successfull');
                    reset();
                }
            })

    };
    useEffect(() => {
        const url = `https://shrouded-journey-47554.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    useEffect(() => {
        setFocus("camp");
    }, [setFocus]);
    const { img, title, description } = service;

    return (
        <Container >
            <h2 className='text-center mt-5'>Register Your Favourite Camp</h2>
            <Row className='my-5'>
                <Col>
                    <img style={{ height: '320px', width: '450px', objectFit: 'cover' }} src={img} alt="" />
                    <h3>{title}</h3>
                    <p><b>Description:</b> {description}</p>
                </Col>
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)} className='d-flex  justify-content-end'>
                        <div className='shadow w-100 p-3 mb-5 bg-body rounded reg-form'>
                            <p>Name:</p>

                            <input defaultValue={user.displayName} {...register("name", { required: true })} />
                            <br />
                            <p>Email:</p>
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            <br />
                            <p>Address:</p>
                            <input  {...register("address", { required: true })} />
                            <br />
                            <p>Camp Title: </p>

                            <input defaultValue={service.title} {...register("camp", { required: true })} />
                            <p>Date:(dd-mm-yyyy)</p>
                            <input  {...register("date", { required: true })} />
                            <br />
                            <br />
                            <input className='button-color border-0 text-white mt-2' type="submit" />
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterCamp;