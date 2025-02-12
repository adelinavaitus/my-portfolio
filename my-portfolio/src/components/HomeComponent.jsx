import React from "react";
import { Card, CardTitle, CardBody, Button, CardText, CardHeader, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
    return (
        <div className="container">
            <Row>
                <Col>
                    <img
                        src="/assets/portfolio.png"
                        alt="Adelina's portfolio"
                        style={{ width: "100%", objectFit: "cover" }}
                    />
                    <h3>
                        Software Engineer
                    </h3>

                    <div>
                        <FaMapMarkerAlt style={{ fontSize: "20px" }} />
                            Bucharest, Romania
                    </div>

                    <div>
                        <Button variant="primary" style={{ marginRight: '10px' }}>Lets colaborate</Button>
                        <Button variant="secondary">See my work</Button>
                    </div>

                    <div>
                        <MdEmail />
                        <FaGithub />
                        <FaLinkedin  />
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