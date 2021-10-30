import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
    return (
        <Container >
            <h2 className='text-center'>Reviews From Our Travelers</h2>
            <Row sm={1} xs={1} md={3} lg={3} className='text-center py-4'>
                <Col>
                    <hr />
                    <h3>★★★★★</h3>
                    <p>This was a tour that was over two years in the making as it was delayed a full year when the world stopped vacation travel due to Covid.  As it was, Ireland had only opened indoor dining and lifted a number of pandemic restrictions only weeks before we arrived in early September. </p>
                    <b>WIlliam D., Ireland</b>

                </Col>
                <Col>
                    <hr />
                    <h3>★★★★☆</h3>
                    <p>We used our travel specialist to plan our family vacation to Europe this year. They came highly recommended and they did not disappoint.  Our trip included six adults plus a baby with multiple flights, train rides, transfers with private drivers, and tours. In a little over two weeks, we visited the French Rivera.</p>
                    <b>Bill Smith, London</b>
                </Col>
                <Col>
                    <hr />
                    <h3>★★★★★</h3>
                    <p>The trip was completely seamless. We were met as scheduled at every meeting point throughout the trip. The car types were as promised and the drivers professional at all times. All the guides that we toured with were the best I have been associated with and are highly recommended. </p>
                    <b>Jane Sampson, USA</b>
                </Col>

            </Row>
            <hr />
        </Container>

    );
};

export default Reviews;