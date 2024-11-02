import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import LessonBoxes from "./components/LessonBoxes";
import MainDrop from "./components/MainDrop";

export default function SubjectPage() {
	const { subject } = useParams();
	const [lessons, setLessons] = useState([]);
	const [lessonCount, setLessonCount] = useState(0);

	useEffect(() => {
		const fetchLessons = async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/api/lessons/${subject}`
				);
				const data = await response.json();

				const uniqueLessons = Array.from(
					new Set(data.map((lesson) => lesson.lesson_number))
				).map((lesson_number) => ({
					lesson_number,
					// Sum likes for all versions of this lesson
					likes: data
						.filter((l) => l.lesson_number === lesson_number)
						.reduce((sum, l) => sum + l.likes, 0),
				}));

				setLessons(uniqueLessons);
				setLessonCount(uniqueLessons.length);
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetchLessons();
	}, [subject]);

	return (
		<div className="subject-page">
			<MainDrop />
			<div className="subject-header">
				<h1>{subject} Lessons</h1>
				<div className="lesson-count">Total Unique Lessons: {lessonCount}</div>
			</div>
			<div className="lessons-grid">
				{lessons.map((lesson) => (
					<Link
						key={lesson.lesson_number}
						to={`/subject/${subject}/lesson/${lesson.lesson_number}`}
						style={{ textDecoration: "none" }}
					>
						<LessonBoxes
							title={`Lesson ${lesson.lesson_number}`}
							likes={lesson.likes}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
