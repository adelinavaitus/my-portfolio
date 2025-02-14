import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/not-found.css";

function NotFound() {
    return (
        <div className="notfound-container">
            <Row className="notfound-row">

                {/* Column for the image */}
                <Col md={6} className="image-col">
                    <img
                        src="/assets/not-found.png"
                        alt="Not found image"
                        style={{ width: "100%", objectFit: "cover" }}
                        className="notfound-img"
                    />
                </Col>

                {/* Column for the text content */}
                <Col md={6} className="text-col">
                    <h1>Oops!</h1>
                    <h3>We can't seem to find the page you're looking for.</h3>
                    <h6>Error code: 404</h6>

                    {/* Link to navigate back to the home page */}
                    <Link to="/">
                        <Button className="back-home-button shadow">Back to Home
                        </Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default NotFound