import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { BsCamera } from "react-icons/bs";
import logo from '../opportunityinternationallogo.png';
import "./Header.css";

export default function Header() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Opportunity International Logo" className="logo"/>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Subject
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {/* change href to correct page links in future */}
                <Dropdown.Item href="/math">Math</Dropdown.Item>
                <Dropdown.Item href="/science">Science</Dropdown.Item>
                <Dropdown.Item href="/english">English</Dropdown.Item>
                <Dropdown.Item href="/reading">Reading</Dropdown.Item>
                <Dropdown.Item href="/reading">Social Studies</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
        {/* change href to scanner page*/}
        <Button href="https://www.google.com" target="_blank">
            <startIcon>
                Scan/Upload Lesson Plan
                <BsCamera style={{ marginLeft: '8px', marginBottom: '3px'}}/>
                </startIcon>
        </Button>

        </nav>
        
    );
}