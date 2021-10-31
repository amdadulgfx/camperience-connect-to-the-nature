import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
// import useCampService from '../../hooks/useCampService';

const MyCamps = () => {
    const [camps, setCamps] = useState([]);
    const { user } = useAuth();
    const myCamps = camps.filter(camp => camp.email === user.email);
    useEffect(() => {
        fetch('http://localhost:5000/registrations')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel this camp?')
        if (proceed) {

            const url = `http://localhost:5000/registrations/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cancelled successfully');
                        const remainingUsers = camps.filter(camp => camp._id !== id)
                        console.log(remainingUsers);
                        setCamps(remainingUsers)
                    }
                })
        }
    }

    return (

        <Container>
            <h3 className='text-center'>My Upcoming Camps</h3>
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camp Name</th>
                        <th>Status</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myCamps.map(myCamp =>

                            <tr key={myCamp._id}>
                                <td>{myCamps.indexOf(myCamp) + 1}</td>
                                <td>{myCamp.camp}</td>
                                <td>{myCamp.status}</td>
                                <Button
                                    onClick={() => handleDelete(myCamp._id)}
                                    variant='outline-danger'>Cancel</Button>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default MyCamps;