import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/my-stack.css";

// Array of slides for the carousel with certificate links, image sources, and alt text
const slides = [
    {
        to: "https://www.coursera.org/account/accomplishments/specialization/D9CRZ6196WZH",
        src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D9CRZ6196WZH/CERTIFICATE_LANDING_PAGE~D9CRZ6196WZH.jpeg",
        alt: "Java certificate"
    },
    {
        to: "https://www.coursera.org/account/accomplishments/specialization/6XXLOAZPRI8U",
        src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6XXLOAZPRI8U/CERTIFICATE_LANDING_PAGE~6XXLOAZPRI8U.jpeg",
        alt: "Spring Framework certificate"
    },
    {
        to: "https://www.coursera.org/account/accomplishments/verify/H35CPZ57F3V2",
        src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~H35CPZ57F3V2/CERTIFICATE_LANDING_PAGE~H35CPZ57F3V2.jpeg",
        alt: "React certificate"
    }
];

function ImageCarousel() {
    return (
        <Carousel className='carousel-container'>
            {/* Iterating over each slide to render the carousel item */}
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <Link to={slide.to}>    {/* Link to the certificate page */}
                        <img
                            className="d-block w-100"   // Bootstrap class for full-width image
                            src={slide.src}     // Image source for each slide
                            alt={slide.alt}     // Alt text for each image for accessibility
                        />
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
