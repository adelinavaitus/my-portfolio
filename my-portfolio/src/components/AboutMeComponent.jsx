import React from "react";
import "../style/about-me.css"
import { Row, Col, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import SoftSkillsCards from "./SoftSkillsCards";
import { CiCircleInfo } from "react-icons/ci";

// Array containing hobby data with name, image source, and description for each hobby
const hobbies = [
    {
        name: "Knitting",
        img_src: "/assets/hobbies/knitting.png",
        description: "For me, knitting serves as a therapeutic escape, providing peace and contentment."
    },
    {
        name: "Traveling",
        img_src: "/assets/hobbies/traveling.png",
        description: "\"Not all those who wander are lost.\" -J.R.R. Tolkien"
    },
    {
        name: "Reading",
        img_src: "/assets/hobbies/reading.png",
        description: "Books are the plane, and the train, and the road.They are the destination, and the journey. They are home."
    }
];

function About() {
    return (
        <div className="aboutme-container">
            {/* Introduction text*/}
            <Row className="text-intro">
                <p>I am a creator of software and an explorer of ideas. Every line of code
                    I write is an invitation to solve a new challenge, an opportunity to transform
                    the abstract into the tangible. In my work, I blend the curiosity of a lifelong
                    learner with the determination to find solutions where others see only obstacles.
                </p>
                <p>I believe that technology is not just about algorithms—it's about people.
                    This is why I bring a team-oriented mindset, clear communication, and efficient
                    organization to every project I take on. The result? Projects where every
                    contribution becomes part of a harmonious whole.</p>
            </Row>

            {/* Soft Skills Section */}
            <Row className="soft-skills-row">
                <h3 className="h3-softskills">Discover My Superpower: Soft Skills
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip className="tooltip-info">Hover over a section to reveal the skill.</Tooltip>}>
                        <Button variant="info" className="info-button">
                            <CiCircleInfo />    {/* Info icon */}
                        </Button>
                    </OverlayTrigger>
                </h3>
                <SoftSkillsCards />
            </Row>

            {/* Hobbies Section */}
            <Row>
                <h3 className="h3-softskills">
                    Curious what keeps me inspired when I step away from my keyboard? It's all about my hobbies.
                </h3>
                {/* Mapping through hobbies array to display each hobby */}
                {hobbies.map((hobby) => (
                    <Col key={hobby.name}>
                        <Card className="hobby-card">
                            <Card.Header className="card-header-hobby">{hobby.name}</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Img src={hobby.img_src} />
                                    </Col>
                                    <Col>
                                        <Card.Text>{hobby.description}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default About;