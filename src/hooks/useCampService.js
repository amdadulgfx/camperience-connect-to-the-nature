import { useEffect, useState } from 'react';

const useCampService = () => {
    const [services, setServices] = useState([]);
    const [camps, setCamps] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setIsloading(true)
        fetch('https://camperience.onrender.com/camps')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsloading(false)
            })

    }, [])
    useEffect(() => {
        fetch('https://camperience.onrender.com/registrations')
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