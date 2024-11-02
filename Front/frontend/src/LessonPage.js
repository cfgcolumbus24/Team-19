import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import MainDrop from "./components/MainDrop";
import Card from "react-bootstrap/Card";
import { BsHeart } from "react-icons/bs";

export default function LessonPage() {
	const { subject, lessonNumber } = useParams();
	const [lessons, setLessons] = useState([]);

	useEffect(() => {
		const fetchLessonContent = async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/api/lessons/${subject}/${lessonNumber}`
				);
				const data = await response.json();
				setLessons(data);
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetchLessonContent();
	}, [subject, lessonNumber]);

	return (
		<div className="lesson-page">
			<MainDrop />
			<h1>
				{subject} - Lesson {lessonNumber}
			</h1>

			<div className="author-grid">
				{lessons.map((lesson) => (
					<Link
						key={lesson.id}
						to={`/subject/${subject}/lesson/${lessonNumber}/plan/${lesson.id}`}
						style={{ textDecoration: "none" }}
					>
						<Card className="author-card">
							<Card.Body>
								<Card.Title>By: {lesson.author}</Card.Title>
								<div className="likes-count">
									<BsHeart /> {lesson.likes}
								</div>
							</Card.Body>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
