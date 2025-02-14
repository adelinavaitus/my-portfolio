import React from "react";
import { Row, Col, Card, Button} from "react-bootstrap";
import ImageCarousel from "./ImageCarouselComponent";
import { FaArrowDown, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/my-stack.css";

function Stack() {
    return (
        <div className="container">
            <h2>My Tech Stack</h2>
            <Row className="row-container">

                <Col lg={4} md={6} sm={12} className="my-stack-col" >
                    <span className="tech-category-text">Backend</span>
                    <Card className="tech-card shadow">
                        <Card.Img
                            variant="top"
                            src="/assets/notepad1.png"
                            alt="Notepad"
                            className="notepad-img"
                        />
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="my-stack-col">
                    <span className="tech-category-text">Frontend</span>
                    <Card className="tech-card shadow">
                        <Card.Img
                            variant="top"
                            src="/assets/notepad2.png"
                            alt="Notepad"
                            className="notepad-img"
                        />
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="my-stack-col">
                    <span className="tech-category-text">Other technologies</span>
                    <Card className="tech-card shadow">

                        <Card.Img
                            variant="top"
                            src="/assets/notepad3.png"
                            alt="Notepad"
                            className="notepad-img"
                        />
                    </Card>
                </Col>
            </Row>
            <Row>
                <img
                    src="/assets/flower-line.png"
                    alt="Flower line image"
                    style={{ width: "100%", objectFit: "cover" }}
                />
            </Row>
            <Row className="github-row" >
                <h4 className="h4-github">You can see my work here</h4>
                 <FaArrowDown className="arrow-down"/>
                <Link to="https://github.com/adelinavaitus">
                    <Button className="github-button shadow">Github <FaGithub />
                    </Button>
                </Link>

            </Row>
            <Row>
                <img
                    src="/assets/flower-line.png"
                    alt="Flower line image"
                    style={{ width: "100%", objectFit: "cover" }}
                />
            </Row>
            <Row className="row-container">
                <div className="certificates-intro">
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