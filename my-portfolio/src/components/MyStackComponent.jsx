import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ImageCarousel from "./ImageCarouselComponent";
import { FaArrowDown, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/my-stack.css";

function Stack() {
    return (
        <div className="container">
            <Row>
                <p className="text-intro-stack">
                    As a software engineer, I have a versatile set of skills that allows
                    me to navigate both front-end and back-end development with ease.
                    Here's a peek into my tech toolkit.
                </p>
            </Row>
            <Row className="row-container">

                <Col lg={4} md={6} sm={12} className="my-stack-col" >

                    <Card className="tech-card ">
                        <h5 className="title-tech-card">Backend</h5>
                        <div className="empty-div"></div>
                        <Card.Img
                            variant="top"
                            src="/assets/notepad1.png"
                            alt="Notepad"
                            className="notepad-img shadow"
                        />
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="my-stack-col">
                    <Card className="tech-card ">
                        <h5 className="title-tech-card">Frontend</h5>
                        <div className="empty-div"></div>
                        <Card.Img
                            variant="top"
                            src="/assets/notepad2.png"
                            alt="Notepad"
                            className="notepad-img shadow"
                        />
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="my-stack-col">
                    <Card className="tech-card">
                        <h5 className="title-tech-card">Other technologies</h5>
                        <div className="empty-div"></div>
                        <Card.Img
                            variant="top"
                            src="/assets/notepad3.png"
                            alt="Notepad"
                            className="notepad-img shadow"
                        />
                    </Card>
                </Col>
            </Row>
            <Row>
                <img
                    src="/assets/flower-line.png"
                    alt="Flower line image"
                    className="flower-line"
                />
            </Row>

            <Row className="github-row" >
                <h4 className="h4-github">Browse through my work here:</h4>
                <Link to="https://github.com/adelinavaitus">
                    <Button className="github-button shadow">Github <FaGithub />
                    </Button>
                </Link>

            </Row>
            <Row>
                <img
                    src="/assets/flower-line.png"
                    alt="Flower line image"
                    className="flower-line"
                />
            </Row>
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