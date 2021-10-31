import React, { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ManageCamps = () => {
    const [camps, setCamps] = useState([]);
    const { user } = useAuth();
    // const myCamps = camps.filter(camp => camp.email === user.email);
    useEffect(() => {
        fetch('https://shrouded-journey-47554.herokuapp.com/registrations')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])

    useEffect(() => {
        AOS.init();
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel this camp?')
        if (proceed) {

            const url = `https://shrouded-journey-47554.herokuapp.com/registrations/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cancelled successfully');
                        const remainingCamps = camps.filter(camp => camp._id !== id)
                        setCamps(remainingCamps)
                    }
                })
        }
    }
    const handleApproval = (id) => {

        const url = `https://shrouded-journey-47554.herokuapp.com/registrations/${id}`;
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated');
                    fetch('https://shrouded-journey-47554.herokuapp.com/registrations')
                        .then(res => res.json())
                        .then(data => setCamps(data))

                }
            })
            .catch()

    }
    return (
        <Container className='py-5' data-aos="zoom-in">
            <h3 className='text-center py-5'>Manage Registered Camps</h3>
            <Table bordered responsive >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camp Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        camps.map(myCamp =>

                            <tr key={myCamp._id}>
                                <td>{camps.indexOf(myCamp) + 1}</td>
                                <td>{myCamp.camp}</td>
                                <td>{myCamp.email}</td>
                                <td>{myCamp.status}</td>
                                <td> {
                                    myCamp.status === "Pending" ? <Button size='sm'
                                        onClick={() => handleApproval(myCamp._id)}
                                        variant='outline-success'>Approve</Button> : <Button variant='success' disabled size='sm'>Approve</Button>
                                }
                                    <Button size='sm' className='ms-1'
                                        onClick={() => handleDelete(myCamp._id)}
                                        variant='outline-danger'>Cancel</Button></td>

                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default ManageCamps;