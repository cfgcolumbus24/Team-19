import React from "react";
import Button from 'react-bootstrap/Button';
import "./Header.css";
import OPI from "../assets/OPI.png"; 

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#333333', position: 'relative' }}>
            <img src={OPI} alt="Opportunity International Logo" className="logo" />
            <div className="ml-auto d-flex align-items-center">
                {/* Navigation Links as Buttons */}
                <Button href="https://opportunity.org" target="_blank" rel="noopener noreferrer" variant="light" className="mx-2">
                    Home Website
                </Button>
                <Button href="https://opportunity.org/who-we-are/careers-internships/" target="_blank" rel="noopener noreferrer" variant="light" className="mx-2">
                    Careers
                </Button>
                <Button href="https://opportunity.org/who-we-are/mission-vision-motivation" target="_blank" rel="noopener noreferrer" variant="light" className="mx-2">
                    Our Cause
                </Button>
            </div>
        </nav>
    );
}
