import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGit, FaUnity } from "react-icons/fa";
import { SiSpring, SiApachemaven, SiMysql, SiVite, SiTypescript, SiRedux, SiPostman, SiIntellijidea } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";
import ImageCarousel from "./ImageCarouselComponent";

function Stack() {
    return (
        <div className="container">
            <h2>My Tech Stack</h2>
            <Row>
                <Col><span className="tech-category-text">Backend</span></Col>
                <Col><span className="tech-category-text">Frontend</span></Col>
                <Col><span className="tech-category-text">Other technologies</span></Col>
            </Row>
            <Row className="row-container">
                <Col md={4} sm={6} className="my-stack-col" >
                    <Card className="tech-card">
                        <Card.Img
                            variant="top"
                            src="/assets/notepad-img.png"
                            alt="Notepad"
                            className="notepad-img"
                        />
                        <Card className="overlaying-card position-absolute">
                            <div className="tech-card-img-container">
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                                        <div className="tech-icons">
                                            <FaJava className="icon fs-1" />
                                            <span className="icon-tooltip">Java</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <SiSpring className="icon fs-1" />
                                            <span className="icon-tooltip">Spring</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <SiApachemaven className="icon fs-1" />
                                            <span className="icon-tooltip">Maven</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <SiMysql className="icon fs-1" />
                                            <span className="icon-tooltip">MySQL</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>

                    </Card>
                </Col>

                <Col md={4} sm={6} className="my-stack-col">
                    <Card className="tech-card">
                        <Card.Img
                            variant="top"
                            src="/assets/notepad-img.png"
                            alt="Notepad"
                            className="notepad-img"
                        />

                        <Card className="overlaying-card position-absolute">
                            <div className="tech-card-img-container">
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                                        <div className="tech-icons">
                                            <FaJs className="icon fs-1" />
                                            <span className="icon-tooltip">Javascript</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <SiTypescript className="icon fs-1" />
                                            <span className="icon-tooltip">Typescript</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <FaReact className="icon fs-1" />
                                            <span className="icon-tooltip">React</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <FaBootstrap className="icon fs-1" />
                                            <span className="icon-tooltip">Bootstrap</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <FaHtml5 className="icon fs-1" />
                                            <span className="icon-tooltip">HTML</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <FaCss3Alt className="icon fs-1" />
                                            <span className="icon-tooltip">CSS</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons ">
                                            <SiRedux className="icon fs-1" />
                                            <span className="icon-tooltip">Redux</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <SiVite className="icon fs-1" />
                                            <span className="icon-tooltip">Vite</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Card>
                </Col>

                <Col md={4} sm={6} className="my-stack-col">
                    <Card className="tech-card">
                        <Card.Img
                            variant="top"
                            src="/assets/notepad-img.png"
                            alt="Notepad"
                            className="notepad-img"
                        />


                        <Card className="overlaying-card position-absolute">
                            <div className="tech-card-img-container">
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                                        <div className="tech-icons">
                                            <FaGit className="icon  fs-1" />
                                            <span className="icon-tooltip">Git</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <SiPostman className="icon  fs-1" />
                                            <span className="icon-tooltip">Postman</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <IoLogoFirebase className="icon  fs-1" />
                                            <span className="icon-tooltip">Firebase</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <DiVisualstudio className="icon  fs-1" />
                                            <span className="icon-tooltip">Visual Studio Code</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="tech-row">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <SiIntellijidea className="icon  fs-1" />
                                            <span className="icon-tooltip">Intellij</span>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className="tech-icons">
                                            <FaUnity className="icon fs-1" />
                                            <span className="icon-tooltip">Unity</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
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