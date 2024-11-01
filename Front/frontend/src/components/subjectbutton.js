import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SubjectButtons() {
	const navigate = useNavigate();

	const handleNavigate = (path) => {
		navigate(path);
	};

	return (
		<div className="d-flex flex-column align-items-start">
			<Button
				variant="primary"
				onClick={() => handleNavigate("/math")}
				className="mb-2">
				Math
			</Button>
			<Button
				variant="secondary"
				onClick={() => handleNavigate("/science")}
				className="mb-2">
				Science
			</Button>
			<Button
				variant="success"
				onClick={() => handleNavigate("/history")}
				className="mb-2">
				History
			</Button>
			<Button
				variant="warning"
				onClick={() => handleNavigate("/english")}
				className="mb-2">
				English
			</Button>
		</div>
	);
}

export default SubjectButtons;
