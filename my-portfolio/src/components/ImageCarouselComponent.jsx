import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ImageCarousel() {
    return (
        <Carousel className='carousel-container'>
            <Carousel.Item>
                <Link to="https://www.coursera.org/account/accomplishments/specialization/D9CRZ6196WZH">
                    <img
                        className="d-block w-100"
                        src="/assets/coursera/java_course.jpeg"
                        alt="First slide"
                    />
                </Link>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="https://www.coursera.org/account/accomplishments/specialization/6XXLOAZPRI8U">
                    <img
                        className="d-block w-100"
                        src="/assets/coursera/spring_course.jpeg"
                        alt="Second slide"
                    />
                </Link>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="https://www.coursera.org/account/accomplishments/verify/H35CPZ57F3V2">
                    <img
                        className="d-block w-100"
                        src="/assets/coursera/react_course.jpeg"
                        alt="Third slide"
                    />
                </Link>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;
