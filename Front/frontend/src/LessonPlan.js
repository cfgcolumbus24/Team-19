import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainDrop from './components/MainDrop';
import Button from 'react-bootstrap/Button';
import './LessonPlan.css';

export default function LessonPlan() {
    const { subject, lessonNumber, planId } = useParams();
    const navigate = useNavigate();
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

    const RenderJSON = ({ data }) => {
        if (Array.isArray(data)) {
            return (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <RenderJSON data={item} />
                        </li>
                    ))}
                </ul>
            );
        } else if (typeof data === 'object' && data !== null) {
            return (
                <ul>
                    {Object.entries(data).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                            <RenderJSON data={value} />
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <span> {data}</span>;
        }
    };


    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8 lesson-plan">
                    <h1>Lesson Plan Title</h1>
                    <h2>Author: John Doe</h2>
                    <div class="lesson-content">
                     <h3>Lesson Content</h3>
                    <p>Some lesson content here...</p>
                    <ul>
                        <li>Understand the concept of counting as a foundational skill for multiplication</li>
                        <li>Use counters to demonstrate adding groups of the same number</li>
                        <li>Practice multiplication with a table</li>
                    </ul>
                    </div>
                    <Button 
                        variant="primary" 
                        size="lg"
                        onClick={() => navigate('/quiz')}
                    >
                        Lesson Quiz
                    </Button>
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="lesson-plan">
    //         <h1>{subject} - Lesson {lessonNumber}</h1>
    //         <div className="lesson-content">
    //             <RenderJSON data={plan.json_content} />
    //         </div>
    //         <div className="d-grid gap-2 mt-4">
    //             <Button 
    //                 variant="primary" 
    //                 size="lg"
    //                 onClick={() => navigate('/quiz')}
    //             >
    //                 Lesson Quiz
    //             </Button>
    //         </div>
    //     </div>
    // );
}