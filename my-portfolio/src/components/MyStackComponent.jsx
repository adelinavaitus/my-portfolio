import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGit, FaUnity } from "react-icons/fa";
import { SiSpring, SiApachemaven, SiMysql, SiVite, SiTypescript, SiRedux, SiPostman, SiIntellijidea } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";

function Stack() {
    return (
        <div className="container">
            <h2>My Tech Stack</h2>
            <Row>
                <Col md={4} className="my-stack-col">
                    <Card className="tech-card">
                        <div className="tech-card-img-container">
                            <Card.Img
                                variant="top"
                                src="/assets/notepad-img.png"
                                alt="Notepad"
                                className="notepad-img"
                            />
                            <div className="tech-icons">
                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <FaJava className="icon" />
                                        <span className="icon-tooltip">Java</span>
                                    </div>

                                    <div className="icon-container">
                                        <SiSpring className="icon" />
                                        <span className="icon-tooltip">Spring</span>
                                    </div>
                                </div>

                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <SiApachemaven className="icon" />
                                        <span className="icon-tooltip">Maven</span>
                                    </div>

                                    <div className="icon-container">
                                        <SiMysql className="icon" />
                                        <span className="icon-tooltip">MySQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4} className="my-stack-col">
                    <Card className="tech-card">
                        <div className="tech-card-img-container">
                            <Card.Img
                                variant="top"
                                src="/assets/notepad-img.png"
                                alt="Notepad"
                                className="notepad-img"
                            />
                            <div className="tech-icons">
                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <FaJs className="icon" />
                                        <span className="icon-tooltip">Javascript</span>
                                    </div>

                                    <div className="icon-container">
                                        <SiTypescript className="icon" />
                                        <span className="icon-tooltip">Typescript</span>
                                    </div>

                                </div>

                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <FaReact className="icon" />
                                        <span className="icon-tooltip">React</span>
                                    </div>

                                    <div className="icon-container">
                                        <FaBootstrap className="icon" />
                                        <span className="icon-tooltip">Bootstrap</span>
                                    </div>
                                </div>

                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <FaHtml5 className="icon" />
                                        <span className="icon-tooltip">HTML</span>
                                    </div>

                                    <div className="icon-container">
                                        <FaCss3Alt className="icon" />
                                        <span className="icon-tooltip">CSS</span>
                                    </div>
                                </div>

                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <SiRedux className="icon" />
                                        <span className="icon-tooltip">Redux</span>
                                    </div>

                                    <div className="icon-container">
                                        <SiVite className="icon" />
                                        <span className="icon-tooltip">Vite</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4} className="my-stack-col">
                    <Card className="tech-card">
                        <div className="tech-card-img-container">
                            <Card.Img
                                variant="top"
                                src="/assets/notepad-img.png"
                                alt="Notepad"
                                className="notepad-img"
                            />
                            <div className="tech-icons">
                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <FaGit className="icon" />
                                        <span className="icon-tooltip">Git</span>
                                    </div>

                                    <div className="icon-container">
                                        <SiPostman className="icon" />
                                        <span className="icon-tooltip">Postman</span>
                                    </div>
                                </div>

                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <IoLogoFirebase className="icon" />
                                        <span className="icon-tooltip">Firebase</span>
                                    </div>

                                    <div className="icon-container">
                                        <DiVisualstudio className="icon" />
                                        <span className="icon-tooltip">Visual Studio Code</span>
                                    </div>
                                </div>

                                <div className="icon-pair">
                                    <div className="icon-container">
                                        <SiIntellijidea className="icon" />
                                        <span className="icon-tooltip">Intellij</span>
                                    </div>

                                    <div className="icon-container">
                                        <FaUnity className="icon" />
                                        <span className="icon-tooltip">Unity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Stack;