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
                            <Link to="/" className="link-style">Home</Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-aboutme.png)' }}>
                            <Link to="/about" className="link-style">About me</Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-stack.png)' }}>
                            <Link to="/stack" className="link-style">My stack</Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-projects.png)' }}>
                            <Link to="/projects" className="link-style">Projects</Link>
                        </div>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-contactme.png)' }}>
                            <Link to="/contact" className="link-style">Contact</Link>
                        </div>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;