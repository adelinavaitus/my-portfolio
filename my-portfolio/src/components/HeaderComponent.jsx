import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar className="navbar" variant="dark" expand="lg">
            <Container>
                <Nav className="ms-auto">
                    <Nav.Item className="nav-item ">
                        <Link to="/" className="link-style">
                            <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-home.png)' }}>
                            </div>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <Link to="/about" className="link-style">
                            <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-aboutme.png)' }}>
                            </div>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <Link to="/stack" className="link-style">
                            <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-stack.png)' }}>
                            </div>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                        <Link to="/contact" className="link-style">
                            <div className="nav-icon" style={{ backgroundImage: 'url(/assets/washi-tape-contactme.png)' }}>
                            </div>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;