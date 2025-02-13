import React from "react";
import "../style/about-me.css"
import { Row, Col, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import SoftSkillsCards from "./SoftSkillsCards";
import { CiCircleInfo } from "react-icons/ci";

function About() {
    return (
        <div className="aboutme-container">
            <Row className="soft-skills-row">
                <h1 className="h1-softskills">Soft skills
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip>Hover over a section to reveal the skill.</Tooltip>}>
                        <Button variant="info" className="info-button">
                            <CiCircleInfo />
                        </Button>
                    </OverlayTrigger>
                </h1>
                <SoftSkillsCards />
            </Row>
            <Row>
                <h1 className="h1-softskills">My hobbies</h1>
                <Col>
                    <Card className="hobby-card">
                        <Card.Header className="card-header-hobby">Knitting</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Img src="/assets/hobbies/knitting.png" />
                                </Col>
                                <Col>
                                    <Card.Text>
                                        For me, knitting serves as a therapeutic escape, providing
                                        peace and contentment.
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="hobby-card">
                        <Card.Header className="card-header-hobby">Traveling</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col><Card.Img src="/assets/hobbies/traveling.png" /></Col>
                                <Col>
                                    <Card.Text>
                                        "Not all those who wander are lost." -
                                        J.R.R. Tolkien
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="hobby-card">
                        <Card.Header className="card-header-hobby">Reading</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col><Card.Img src="/assets/hobbies/reading.png" /></Col>
                                <Col>
                                    <Card.Text>
                                        Books are the plane, and the train, and the road.
                                        They are the destination, and the journey. They are home.
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default About;