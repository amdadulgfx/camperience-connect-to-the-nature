import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';


const AddNewCamp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Camp Added successfully');
                    reset();
                }
            })

    };
    return (
        <Container>
            <h2 className='text-center'>Add A New Camp</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className='d-flex  justify-content-end'>
                <div className='shadow w-100 p-3 mb-5 bg-body rounded reg-form'>

                    <input className='form-control' placeholder='Camp Title'  {...register("title", { required: true })} />
                    <br />
                    <input className='form-control' placeholder='Image URL' {...register("img", { required: true })} />
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