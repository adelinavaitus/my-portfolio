import React from 'react';
import { Carousel } from 'react-bootstrap';

function ImageCarousel() {
    return (
        <Carousel className='carousel-container'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/coursera/java_course.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/coursera/spring_course.jpeg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/coursera/react_course.jpeg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;
