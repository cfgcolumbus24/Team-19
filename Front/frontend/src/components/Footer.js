import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css"; // Import custom styles 
function Footer() {
    return (
        <footer className="footer bg-light py-4 mt-5">
            <Container>
                <Row>
                    {/* Purpose and Goal Segment */}
                    <Col md={8} className="mb-3">
                        <h4 className="poppins-bold">Our Purpose and Goal</h4>
                        <p>
                            At Opportunity International, our mission is to bridge the gap for
                            educators who face challenges with limited access to resources. We are
                            dedicated to creating a system that empowers teachers with
                            pre-created, accessible materials, allowing them to focus on teaching and
                            inspiring the next generation.
                        </p>
                    </Col>
                    
                    {/* Button Segment */}
                    <Col md={4} className="text-center">
                        <h5 className="poppins-bold mb-3">Explore More</h5>
                        <Button variant="primary" className="m-2" href="/about">
                            About Us
                        </Button>
                        <Button variant="secondary" className="m-2" href="/contact">
                            Contact Us
                        </Button>
                        <Button variant="success" className="m-2" href="/resources">
                            Resources
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p>&copy; {new Date().getFullYear()} Opportunity International. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
