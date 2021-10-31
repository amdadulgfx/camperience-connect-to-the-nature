import React, { useEffect, useState } from 'react';

const useCampService = () => {
    const [services, setServices] = useState([]);
    const [camps, setCamps] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/registrations')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])
    return {
        services,
        camps,
        setCamps
    };
};

export default useCampService;