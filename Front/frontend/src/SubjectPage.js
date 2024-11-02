import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LessonBoxes from './components/LessonBoxes';
import MainDrop from './components/MainDrop';

export default function SubjectPage() {
    const { subject } = useParams();
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/lessons/${subject}`);
                const data = await response.json();
                setLessons(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchLessons();
    }, [subject]);

    return (
        <div className="subject-page">
            <MainDrop />
            <h1>{subject} Lessons</h1>
            <div className="lessons-grid">
                {lessons.map((lesson) => (
                    <LessonBoxes 
                        key={lesson.id}
                        title={`Lesson ${lesson.lesson_number}`}
                        likes={lesson.likes}
                    />
                ))}
            </div>
        </div>
    );
}