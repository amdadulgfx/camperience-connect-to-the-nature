import { useEffect, useState } from 'react';

const useCampService = () => {
    const [services, setServices] = useState([]);
    const [camps, setCamps] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setIsloading(true)
        fetch('https://shrouded-journey-47554.herokuapp.com/camps')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsloading(false)
            })

    }, [])
    useEffect(() => {
        fetch('https://shrouded-journey-47554.herokuapp.com/registrations')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])
    return {
        services,
        camps,
        setCamps,
        isLoading,
        setIsloading
    };
};

export default useCampService;