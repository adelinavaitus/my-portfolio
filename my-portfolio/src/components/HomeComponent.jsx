import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "../style/home.css"

function Home() {
    return (
        <div className="container">
            <Row>
                <Col>
                    <div className="home-container">
                        {/* Portfolio Image */}
                        <div>
                            <img
                                src="/assets/portfolio.png"
                                alt="Adelina's portfolio"
                                style={{ width: "100%", objectFit: "cover" }}
                                className="portfolio-img"
                            />
                        </div>

                        {/* Role/title */}
                        <div><h3>Software Engineer</h3></div>

                        {/* Location */}
                        <div>
                            <FaMapMarkerAlt style={{ fontSize: "20px" }} />
                            Bucharest, Romania
                        </div>

                        {/* Action Buttons (Get in touch & See my work) */}
                        <div className="buttons-container">
                            <Link to="/contact">
                                <Button className="colaborate-button shadow">Get in touch</Button>
                            </Link>
                            <Link to="/projects">
                                <Button className="work-button shadow" variant="secondary">See my work</Button>
                            </Link>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <a href="mailto:adelinavaitus@gmail.com">
                                <MdEmail className="home-icon " />
                            </a>
                            <Link to="https://github.com/adelinavaitus">
                                <FaGithub className="home-icon" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/adelina-vaitus-994617209">
                                <FaLinkedin className="home-icon" />
                            </Link>
                        </div>
                    </div>
                </Col>

                {/* Right Side Image */}
                <Col style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src="/assets/home-img.png"
                        alt="Home page image"
                        style={{ width: "100%", objectFit: "cover" }}
                        className="home-img"
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Home;