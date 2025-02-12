import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-4 footer">
      <img
        src="/assets/flowers.png"
        alt="Flowers image"
        style={{ width: "100%", objectFit: "cover" }}
      />
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="link-style">Home</Link>
              </li>
              <li>
                <Link to="/about" className="link-style">About me</Link>
              </li>
              <li>
                <Link to="/contact" className="link-style">Contact</Link>
              </li>
            </ul>
          </Col>

          <Col md={6} sm={12}>
            <h5>Contact</h5>
            <p>Email: adelinavaitus@gmail.com</p>
            <p>Address: Bucharest</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
