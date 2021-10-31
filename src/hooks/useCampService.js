import React, { useEffect, useState } from 'react';

const useCampService = () => {
    const [services, setServices] = useState([]);
    const [camps, setCamps] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-journey-47554.herokuapp.com/camps')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        fetch('https://shrouded-journey-47554.herokuapp.com/registrations')
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