import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useCampService from '../../hooks/useCampService';
import useAuth from '../../hooks/useAuth';
import { Container, Form, Row } from 'react-bootstrap';

const RegisterCamp = () => {
    const { services } = useCampService();
    const { serviceId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const myService = services.filter(service => service._id === serviceId)

    return (
        <Container >
            <Form onSubmit={handleSubmit(onSubmit)} className='d-flex justify-content-center'>
                <div className='my-5 w-75 shadow p-3 mb-5 bg-body rounded'>

                    <p>Register Your Favourite Camp</p>

                    <p>Name:</p>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <br />
                    <p>Email:</p>
                    <input defaultValue={user.email} {...register("email")} />
                    <br />
                    <p>Address:</p>
                    <input  {...register("address")} />
                    <br />
                    <p>Service Title:</p>
                    <input defaultValue={myService[0]?.title} {...register("service")} />
                    <p>Date:(dd-mm-yyyy)</p>
                    <input  {...register("date")} />
                    <br />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='button-color border-0 text-white mt-2' type="submit" />
                </div>

            </Form>
        </Container>
    );
};

export default RegisterCamp;