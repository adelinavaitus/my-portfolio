import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <Row>
                <Col>
                    <div className="home-container">
                        <div>
                            <img
                                src="/assets/portfolio.png"
                                alt="Adelina's portfolio"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <h3>
                                Software Engineer
                            </h3>
                        </div>
                        <div>
                            <FaMapMarkerAlt style={{ fontSize: "20px" }} />
                            Bucharest, Romania
                        </div>

                        <div className="buttons-container">
                            <Link to="/contact">
                                <Button className="colaborate-button" variant="primary">Get in touch</Button>
                            </Link>
                            <Link to="/projects">
                                <Button className="work-button" variant="secondary">See my work</Button>
                            </Link>
                        </div>
                        <div>
                            <a href="mailto:adelinavaitus@gmail.com">
                                <MdEmail className="home-icon" />
                            </a>
                            <Link to="https://github.com/adelinavaitus">
                                <FaGithub className="home-icon" />
                            </Link>
                            <Link to="www.linkedin.com/in/adelina-vaitus-994617209">
                                <FaLinkedin className="home-icon" />
                            </Link>
                        </div>
                    </div>
                </Col>

                <Col>
                    <img
                        src="/assets/home-img.png"
                        alt="Home page image"
                        style={{ width: "100%", objectFit: "cover" }}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Home;