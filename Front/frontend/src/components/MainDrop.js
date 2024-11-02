// MainDrop.js
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { BsCamera } from "react-icons/bs";
import "./MainDrop.css";

export default function MainDrop() {
	const navigate = useNavigate();
	const [subjects, setSubjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchSubjects = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch("http://localhost:5000/api/subjects", {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					throw new Error(`Server error: ${response.status}`);
				}
				const data = await response.json();
				console.log("Subjects fetched:", data);
				setSubjects(Array.isArray(data) ? data : []);
			} catch (error) {
				console.error("Fetch error:", error);
				setError(error.message);
				setSubjects([]);
			} finally {
				setLoading(false);
			}
		};
		fetchSubjects();
	}, []);

	return (
		<div className="dropdownandscan">
			{loading && <div>Loading...</div>}
			{error && (
				<div className="error-message">
					Error: {error}. Is the backend server running?
				</div>
			)}
			{!loading && !error && (
				<>
					<Dropdown>
						<Dropdown.Toggle variant="success">Select Subject</Dropdown.Toggle>
						<Dropdown.Menu>
							{subjects.length > 0 ? (
								subjects.map((subject) => (
									<Dropdown.Item
										key={subject}
										className={`${subject.toLowerCase()}-item`} // Add this line
										onClick={() => navigate(`/subject/${subject}`)}
									>
										{subject}
									</Dropdown.Item>
								))
							) : (
								<Dropdown.Item disabled>No subjects found</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Button
						onClick={() =>
							window.open("http://10.250.232.171:5001/upload", "_blank")
						}
						className="scan-button"
					>
						<BsCamera style={{ marginBottom: "4px", marginRight: "6px" }} />{" "}
						Scan Lesson Plan
					</Button>
				</>
			)}
		</div>
	);
}
