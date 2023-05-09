import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddNewCamp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://camperience.onrender.com/camps', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Camp Added successfully');
                    reset();
                }
            })

    };
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container className='py-5' data-aos="zoom-in">
            <h2 className='text-center py-5'>Add A New Camp</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className='d-flex  justify-content-end'>
                <div className='shadow w-100 p-3 mb-5 bg-body rounded reg-form'>

                    {errors.title && <span className='text-danger'>This field is required</span>}
                    <input className='form-control' placeholder='Camp Title'  {...register("title", { required: true })} />
                    <br />
                    {errors.location && <span className='text-danger'>This field is required</span>}
                    <input className='form-control' placeholder='Location' {...register("location", { required: true })} />
                    <br />
                    {errors.img && <span className='text-danger'>This field is required</span>}
                    <input className='form-control' placeholder='Image URL' {...register("img", { required: true })} />
                    <br />
                    {errors.duration && <span className='text-danger'>This field is required</span>}
                    <input className='form-control' placeholder='Duration' {...register("duration", { required: true })} />
                    <br />
                    {errors.price && <span className='text-danger'>This field is required</span>}
                    <input className='form-control' placeholder='Price' {...register("price", { required: true })} />
                    <br />
                    <textarea className='form-control' placeholder='Description' {...register("description", { required: true })} />
                    <br />

                    <Button className='button-color border-0 text-white mt-2' type="submit" >Add This Camp</Button>
                </div>

            </Form>
        </Container>
    );
};

export default AddNewCamp;