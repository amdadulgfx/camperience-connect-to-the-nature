import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './RegisterCamp.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    useEffect(() => {
        AOS.init();
    }, [])
    const { img, title, description, location, duration, price } = service;

    return (
        <Container className='py-5' data-aos="zoom-in">
            <h2 className='text-center mt-5'>Register Your Favourite Camp</h2>
            <Row className='my-5' xs={1} sm={1} md={2}>
                <Col>
                    <img className='reg-img' src={img} alt="" />
                    <h3>{title}</h3>
                    <p><b>Description:</b> {description}</p>
                    <p><b>Location:</b> {location}</p>
                    <p><b>Duration:</b> {duration}</p>
                    <p><b>Price:</b> {price}</p>
                </Col>
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)} className='d-flex  justify-content-end'>
                        <div className='shadow w-100 p-3 mb-5 bg-body rounded reg-form'>
                            Name:
                            {errors.name && <span className='text-danger'>This field is required</span>}
                            <input className='form-control' defaultValue={user.displayName} {...register("name", { required: true })} />
                            <br />
                            Email:
                            {errors.email && <span className='text-danger'>This field is required</span>}
                            <input className='form-control' defaultValue={user.email} {...register("email", { required: true })} />
                            <br />
                            Address:
                            {errors.address && <span className='text-danger'>This field is required</span>}
                            <input className='form-control'  {...register("address", { required: true })} />
                            <br />
                            Camp Title:
                            {errors.camp && <span className='text-danger'>This field is required</span>}
                            <input className='form-control' defaultValue={service.title} {...register("camp", { required: true })} />
                            Date:
                            {errors.date && <span className='text-danger'>This field is required</span>}
                            <input className='form-control' type='date' {...register("date", { required: true })} />
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