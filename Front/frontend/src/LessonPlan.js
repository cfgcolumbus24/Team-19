import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainDrop from './components/MainDrop';
// import './LessonPlan.css'
export default function LessonPlan() {
    const { subject, lessonNumber, planId } = useParams();
    const [plan, setPlan] = useState(null);

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/lessons/${subject}/${lessonNumber}/${planId}`
                );
                const data = await response.json();
                setPlan(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchPlan();
    }, [subject, lessonNumber, planId]);

    if (!plan) return <div>Loading...</div>;

    return (
        <div className="lesson-page">
    <h1>{subject} - Lesson {lessonNumber}</h1>
    {/* Assuming plan.json_content is an object */}
    <div className="lesson-content">
        {Object.entries(plan.json_content).map(([key, value]) => (
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
    </div>
</div>
    );
}