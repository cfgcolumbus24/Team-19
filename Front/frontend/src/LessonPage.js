import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import './LessonPage.css'
=======
>>>>>>> parent of c17f76e (Merge pull request #20 from cfgcolumbus24/xiaoguo)

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
                console.error('Error:', error);
            }
        };
        fetchLessonContent();
    }, [subject, lessonNumber]);

    const handleLike = async (lessonId) => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/lessons/${lessonId}/like`,
                { method: 'POST' }
            );
            const data = await response.json();
            setLessons(lessons.map(lesson => 
                lesson.id === lessonId 
                    ? {...lesson, likes: data.likes}
                    : lesson
            ));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="lesson-page">
            <h1>{subject} - Lesson {lessonNumber}</h1>
            {lessons.map(lesson => (
                <div key={lesson.id} className="lesson-content">
                    <h2>Author: {lesson.author}</h2>
<<<<<<< HEAD

                    {Object.entries(lesson.json_content).map(([key, value]) => (
                        <div key={key}>
                            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                            {Array.isArray(value) ? (
                                <ul>
                                    {value.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{value}</p>
                            )}
                        </div>
                    ))}

=======
                    <pre>{JSON.stringify(lesson.json_content, null, 2)}</pre>
>>>>>>> parent of c17f76e (Merge pull request #20 from cfgcolumbus24/xiaoguo)
                    <button onClick={() => handleLike(lesson.id)}>
                        Like ({lesson.likes})
                    </button>
                </div>
            ))}
        </div>
    );
}