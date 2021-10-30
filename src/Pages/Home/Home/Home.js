import React from 'react';
import Banner from '../Banner/Banner';
import NewAdventure from '../NewAdventure/NewAdventure';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews />
            <NewAdventure></NewAdventure>


        </div>
    );
};

export default Home;


