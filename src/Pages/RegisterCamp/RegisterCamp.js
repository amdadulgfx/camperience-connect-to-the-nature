import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './RegisterCamp.css';
const RegisterCamp = () => {

    const { serviceId } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState({});
    const { register, handleSubmit, setFocus, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrouded-journey-47554.herokuapp.com/registrations', { ...data, status: "Pending" })
            .then(res => {
                if (res.data.insertedId) {
                    alert('Registration successfull');
                    reset();
                }
            })

    };
    useEffect(() => {
        const url = `https://shrouded-journey-47554.herokuapp.com/camps/${serviceId}`;
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
                    <img className='reg-img' src={img} alt="" />
                    <h3>{title}</h3>
                    <p><b>Description:</b> {description}</p>
                </Col>
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)} className='d-flex  justify-content-end'>
                        <div className='shadow w-100 p-3 mb-5 bg-body rounded reg-form'>
                            Name:

                            <input defaultValue={user.displayName} {...register("name", { required: true })} />
                            <br />
                            Email:
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            <br />
                            Address:
                            <input  {...register("address", { required: true })} />
                            <br />
                            Camp Title:

                            <input defaultValue={service.title} {...register("camp", { required: true })} />
                            Date:
                            <input type='date' {...register("date", { required: true })} />
                            <br />
                            <br />
                            <Button className='button-color border-0 text-white mt-2' type="submit" >Add This Camp</Button>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterCamp;