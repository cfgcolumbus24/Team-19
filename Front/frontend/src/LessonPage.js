import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainDrop from "./components/MainDrop";
import Card from "react-bootstrap/Card";
import { BsHeart } from "react-icons/bs";
import "./LessonPage.css";

export default function LessonPage() {
    const { subject, lessonNumber } = useParams();
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLessonContent = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://localhost:5000/api/lessons/${subject}/${lessonNumber}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch lesson content');
                }
                const data = await response.json();
                setLessons(data);
            } catch (error) {
                setError(error.message);
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLessonContent();
    }, [subject, lessonNumber]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="lesson-page">
            <MainDrop />
            <div className="lesson-header">
                <h1>{subject} - Lesson {lessonNumber}</h1>
                <p>Available Lesson Plans</p>
            </div>

            <div className="author-grid">
                {lessons.map((lesson) => (
                    <Link
                        key={lesson.id}
                        to={`/subject/${subject}/lesson/${lessonNumber}/plan/${lesson.id}`}
                        className="lesson-link"
                    >
                        <Card className="author-card">
                            <Card.Body>
                                <Card.Title>Author: {lesson.author}</Card.Title>
                                <Card.Text>
                                    Created: {new Date(lesson.created_at).toLocaleDateString()}
                                </Card.Text>
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