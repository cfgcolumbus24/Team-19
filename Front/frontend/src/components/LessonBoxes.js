// for displaying lesson boxes in SubjectPage.js

import React from 'react';
import './LessonBoxes.css';

export default function LessonBoxes({ title = "Lesson Box" }) {
  return (
    <div className="lesson-box">
      <h2>{title}</h2>
    </div>
  );
}