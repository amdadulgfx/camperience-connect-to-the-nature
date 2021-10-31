import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/khwsbMK/4434099-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3 className='fs-2 fw-bolder'>DREAM BIG</h3>
                        <p className='fs-4'>Explore Every Beautiful <b>Destinations</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/jygLYP0/4434099-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-2 fw-bolder'>TRAVEL STYLES</h3>
                        <p className='fs-4'>The Right Tour for the Right <b>Traveler</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/LSVxJ5J/4434099-3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-2 fw-bolder'>ADVENTURE</h3>
                        <p className='fs-4'>Travel More, Create More <b>Memories</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;

/* https://i.ibb.co/jygLYP0/4434099-1.jpg
https://i.ibb.co/khwsbMK/4434099-2.jpg
https://i.ibb.co/LSVxJ5J/4434099-3.jpg */