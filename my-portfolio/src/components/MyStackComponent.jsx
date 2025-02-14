import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ImageCarousel from "./ImageCarouselComponent";
import { FaArrowDown, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/my-stack.css";

// Array of notepad items to display the technologies
const notepads = [
    { title: "Backend", src: "/assets/notepad1.png" },
    { title: "Frontend", src: "/assets/notepad2.png" },
    { title: "Other technologies", src: "/assets/notepad3.png" },
];

// FlowerLine component for displaying a decorative flower line
const FlowerLine = () => {
    return (
        <img
            src="/assets/flower-line.png"
            alt="Flower line image"
            className="flower-line"
        />
    );
};

function Stack() {
    return (
        <div className="container">
            {/* Introduction text */}
            <Row>
                <p className="text-intro-stack">
                    As a software engineer, I have a versatile set of skills that allows
                    me to navigate both front-end and back-end development with ease.
                    Here's a peek into my tech toolkit.
                </p>
            </Row>

            {/* Loop over notepads array to display each tech category */}
            <Row className="row-container">
                {notepads.map((notepad, index) => (
                    <Col lg={4} md={6} sm={12} key={index} className="my-stack-col" >

                        <Card className="tech-card ">
                            <h5 className="title-tech-card">{notepad.title}</h5>
                            <div className="empty-div"></div>
                            <Card.Img
                                variant="top"
                                src={notepad.src}
                                alt="Notepad"
                                className={"notepad-img shadow"}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Decorative flower line */}
            <Row><FlowerLine /></Row>

            {/* Section with a link to the GitHub profile */}
            <Row className="github-row" >
                <h4 className="h4-github">Browse through my work here:</h4>
                <Link to="https://github.com/adelinavaitus">
                    <Button className="github-button shadow">Github <FaGithub />
                    </Button>
                </Link>
            </Row>

            {/* Decorative flower line */}
            <Row><FlowerLine /></Row>

            {/* Section for displaying certifications */}
            <Row className="row-container">
                <div className="text-intro-stack">
                    <p>
                        Continuous learning has always been at the core of my professional growth.
                        Throughout my journey as a software engineer, I’ve dedicated time to acquiring
                        new skills and staying up to date with the latest technologies and methodologies.
                        Below, you’ll find a selection of certifications I’ve earned on Coursera, showcasing
                        my commitment to improving my expertise.
                    </p>
                </div>
                <ImageCarousel />
            </Row>
        </div>
    );
}

export default Stack;