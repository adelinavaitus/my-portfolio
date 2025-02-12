import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar bg="white" variant="dark" expand="lg">
            <Container>
                <Nav className="ms-auto">
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-home.png)' }}>
                            <Link to="/">Home</Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-aboutme.png)' }}>
                            <Link to="/about">About me</Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-stack.png)' }}>
                            <Link to="/stack">My stack</Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-projects.png)' }}>
                            <Link to="/projects">Projects</Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-contactme.png)' }}>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;