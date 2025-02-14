import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="py-4 footer">
      {/* Background image for footer */}
      <img
        src="/assets/flowers.png"
        alt="Flowers image"
        style={{ width: "100%", objectFit: "cover" }}
      />
      <Container>
        <Row>
          {/* Quick Links column */}
          <Col md={6} sm={12}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="link-style-footer">Home</Link></li>
              <li><Link to="/about" className="link-style-footer">About me</Link></li>
              <li><Link to="/contact" className="link-style-footer">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact information column */}
          <Col md={6} sm={12}>
            <h5>Contact</h5>
            <p><MdEmail /> adelinavaitus@gmail.com</p>
            <p><FaMapMarkerAlt /> Bucharest, Romania</p>
          </Col>
        </Row>
        <Row className="mt-3">
          {/* Footer copyright text */}
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Designed and built by Adelina Vaitus.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
