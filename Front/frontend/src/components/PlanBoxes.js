import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsHeart } from 'react-icons/bs';

export default function LessonBoxes({ title, likes }) {
    return (
        <Card className="lesson-box">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="likes">
                    <BsHeart /> {likes}
                </div>
            </Card.Body>
        </Card>
    );
}