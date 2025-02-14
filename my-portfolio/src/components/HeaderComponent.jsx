import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Array containing the nav items and their corresponding paths and icons
const navItems = [
    { to: "/", icon: "/assets/washi-tape-home.png" },   // Home
    { to: "/about", icon: "/assets/washi-tape-aboutme.png" },   // About me
    { to: "/stack", icon: "/assets/washi-tape-stack.png" },     //My stack
    { to: "/contact", icon: "/assets/washi-tape-contactme.png" },  //Contact me
];

function Header() {
    return (
        <Navbar className="navbar" variant="dark" expand="lg">
            <Container>
                <Nav className="ms-auto">
                    {/* Loop through navItems array and render each link dynamically */}
                    {navItems.map((item, index) => (
                        <Nav.Item key={index} className="nav-item">
                            {/* Link for each nav item, with icon and path */}
                            <Link to={item.to} className="link-style">
                                {/* Set background image for each nav item */}
                                <div className="nav-icon" style={{ backgroundImage: `url(${item.icon})` }}></div>
                            </Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;