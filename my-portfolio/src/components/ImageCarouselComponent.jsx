import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/my-stack.css";

function ImageCarousel() {
    return (
        <Carousel className='carousel-container'>
            <Carousel.Item>
                <Link to="https://www.coursera.org/account/accomplishments/specialization/D9CRZ6196WZH">
                    <img
                        className="d-block w-100"
                        src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D9CRZ6196WZH/CERTIFICATE_LANDING_PAGE~D9CRZ6196WZH.jpeg"
                        alt="First slide"
                    />
                </Link>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="https://www.coursera.org/account/accomplishments/specialization/6XXLOAZPRI8U">
                    <img
                        className="d-block w-100"
                        src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6XXLOAZPRI8U/CERTIFICATE_LANDING_PAGE~6XXLOAZPRI8U.jpeg"
                        alt="Second slide"
                    />
                </Link>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="https://www.coursera.org/account/accomplishments/verify/H35CPZ57F3V2">
                    <img
                        className="d-block w-100"
                        src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~H35CPZ57F3V2/CERTIFICATE_LANDING_PAGE~H35CPZ57F3V2.jpeg"
                        alt="Third slide"
                    />
                </Link>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;
