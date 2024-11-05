import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; // Import the Header component
import ImageCarousel from "./ImageCarousel"; // Import the ImageCarousel component
import MainDrop from "./MainDrop"; // Import the MainDrop component
import Footer from "./Footer"; // Import the Footer component
import VideoFile from "../assets/4221485-hd_1920_1080_30fps.mp4";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
	const navigate = useNavigate();
	const [subjects, setSubjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch subjects from the API
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
		<div className="homepage-container">
			<Header /> {/* Include Header at the top */}
			
			{/* Video container */}
			<div className="video-crop-container">
				<video className="video-background" autoPlay loop muted>
					<source src={VideoFile} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			{/* Enhanced Introduction Section */}
			<Container className="introduction-section py-4 bg-light shadow-sm rounded-3">
				<Row>
					<Col xs={12} md={10} lg={8} className="mx-auto text-center">
						<div className="p-4 custom-translucent-box">
							<h1 className="poppins-bold">
								Welcome to Opportunity International
							</h1>
							<p className="lead poppins-bold">
								At Opportunity International, we believe that education is the
								cornerstone of a thriving society. We are dedicated to
								empowering teachers and learners alike by providing the
								resources and tools needed to inspire growth, creativity, and
								lasting knowledge.
							</p>
						</div>
					</Col>
				</Row>
				{/* Meet the Staff header above the ImageCarousel */}
				<Row className="mt-4">
					<Col xs={12} className="text-center">
						<h2 className="poppins-bold">Meet the Staff!</h2>
					</Col>
				</Row>
				<Row className="mt-3">
					<Col xs={12}>
						<ImageCarousel />
					</Col>
				</Row>
			</Container>
			{/* Teacher Tools Section */}
			<Container className="teacher-tools-container p-4 bg-light shadow-sm rounded-3 custom-translucent-box mt-4">
				<h1 className="teacher-tools-heading text-center mb-4">
					Teacher Learning Tools
				</h1>
				<MainDrop /> {/* Add MainDrop component here */}
			</Container>
			{/* Include Footer */}
			<Footer />
		</div>
	);
}

export default HomePage;
