import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css"; // Optional for additional styling
import Logo from "../assets/OPI.png"; // Adjust the path if needed

function Header() {
    return (
        <Navbar expand="lg" className="bg-light py-3">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        alt="Opportunity International Logo"
                        width="150"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://opportunity.org/" className="mx-2">Home Web</Nav.Link>
                        <Nav.Link href="https://opportunity.org/news/media-coverage/" className="mx-2">Media</Nav.Link>
                        <Nav.Link href="https://opportunity.org/who-we-are/careers-internships/" className="mx-2">Careers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
