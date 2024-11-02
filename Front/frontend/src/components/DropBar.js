import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { BsCamera } from "react-icons/bs";
import './DropBar.css'; // Import the CSS if you have custom styles

function DropBar() {
	return (
		<div className="d-flex justify-content-center align-items-center gap-3 mt-3"> {/* Flex container with spacing */}
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
					Select Subject
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item className="math-item" href="#/math">Math</Dropdown.Item>
					<Dropdown.Item className="science-item" href="#/science">Science</Dropdown.Item>
					<Dropdown.Item className="english-item" href="#/english">English</Dropdown.Item>
					<Dropdown.Item className="reading-item" href="#/reading">Reading</Dropdown.Item>
					<Dropdown.Item className="social-studies-item" href="#/social-studies">Social Studies</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Button href="https://www.google.com" target="_blank" size="lg">
				<BsCamera style={{ marginLeft: "8px", marginBottom: "3px" }} /> Scan Lesson Plan
			</Button>
		</div>
	);
}

export default DropBar;
