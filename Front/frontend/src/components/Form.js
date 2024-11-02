import React, { useState } from 'react';
import './Form.css';

// Utility function to capitalize the first letter of each word
const capitalizeWords = (str) => {
  if (str === "lesson_id") {
    return "Lesson ID";
  }
  return str.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
};

const Form = () => {
  const initialData = {
    lesson_id: "LP001",
    subject: {
      headline: "Math",
      main_topic: "Multiplication",
      subtopics: [
        {
          name: "Counting",
          estimated_time: "15 minutes",
          learning_objectives: [
            "Understand the concept of counting as a foundational skill for multiplication"
          ],
          materials_needed: ["Counters", "Number charts"],
          instructional_activities: [
            "Practice counting objects up to 20",
            "Use number charts to reinforce counting patterns"
          ],
          assessment_methods: [
            "Observe student ability to count objects correctly"
          ]
        },
        {
          name: "Repetitive Addition",
          estimated_time: "20 minutes",
          learning_objectives: [
            "Understand that multiplication is repeated addition"
          ],
          materials_needed: ["Counters", "Addition worksheets"],
          instructional_activities: [
            "Use counters to demonstrate adding groups of the same number",
            "Practice adding the same number multiple times on worksheets"
          ],
          assessment_methods: [
            "Worksheet completion on repetitive addition",
            "Observation of student ability to group numbers"
          ]
        },
        {
          name: "Multiplying Single-Digit Numbers",
          estimated_time: "25 minutes",
          learning_objectives: [
            "Learn to multiply single-digit numbers",
            "Memorize multiplication facts for numbers 1 through 10"
          ],
          materials_needed: ["Multiplication table", "Flashcards"],
          instructional_activities: [
            "Practice multiplication with a table",
            "Use flashcards to reinforce multiplication facts"
          ],
          assessment_methods: [
            "Multiplication quiz on single-digit numbers",
            "Flashcard speed drill for memorization"
          ]
        },
        {
          name: "Multiplying Two-Digit Numbers",
          estimated_time: "30 minutes",
          learning_objectives: [
            "Learn the process for multiplying two-digit numbers",
            "Apply single-digit multiplication skills to larger numbers"
          ],
          materials_needed: ["Grid paper", "Pencil"],
          instructional_activities: [
            "Practice two-digit multiplication with grid paper",
            "Work on multi-step multiplication problems"
          ],
          assessment_methods: [
            "Two-digit multiplication worksheet",
            "Teacher observation of problem-solving approach"
          ]
        }
      ]
    }
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e, key, subKey, index) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      if (index !== undefined) {
        const updatedSubtopics = [...prevState.subject.subtopics];
        updatedSubtopics[index][subKey] = value;
        return {
          ...prevState,
          subject: {
            ...prevState.subject,
            subtopics: updatedSubtopics
          }
        };
      } else if (subKey) {
        return {
          ...prevState,
          [key]: {
            ...prevState[key],
            [subKey]: value
          }
        };
      } else {
        return {
          ...prevState,
          [key]: value
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>{capitalizeWords("lesson_id")}</h3>
        <label>{capitalizeWords("lesson_id")}:</label>
        <input
          type="text"
          name="lesson_id"
          placeholder={formData.lesson_id}
          onChange={(e) => handleChange(e, "lesson_id")}
        />
      </div>
      <div>
        <h3>{capitalizeWords("subject")}</h3>
        <label>{capitalizeWords("headline")}:</label>
        <input
          type="text"
          name="headline"
          placeholder={formData.subject.headline}
          onChange={(e) => handleChange(e, "subject", "headline")}
        />
        <label>{capitalizeWords("main_topic")}:</label>
        <input
          type="text"
          name="main_topic"
          placeholder={formData.subject.main_topic}
          onChange={(e) => handleChange(e, "subject", "main_topic")}
        />
        {formData.subject.subtopics.map((subtopic, index) => (
          <div key={index} className="subtopic">
            <h4>{capitalizeWords("subtopic")} {index + 1}</h4>
            <label>{capitalizeWords("name")}:</label>
            <input
              type="text"
              name="name"
              placeholder={subtopic.name}
              onChange={(e) => handleChange(e, "subject", "name", index)}
            />
            <label>{capitalizeWords("estimated_time")}:</label>
            <input
              type="text"
              name="estimated_time"
              placeholder={subtopic.estimated_time}
              onChange={(e) => handleChange(e, "subject", "estimated_time", index)}
            />
            <label>{capitalizeWords("learning_objectives")}:</label>
            <textarea
              name="learning_objectives"
              placeholder={subtopic.learning_objectives.join(", ")}
              onChange={(e) => handleChange(e, "subject", "learning_objectives", index)}
            />
            <label>{capitalizeWords("materials_needed")}:</label>
            <textarea
              name="materials_needed"
              placeholder={subtopic.materials_needed.join(", ")}
              onChange={(e) => handleChange(e, "subject", "materials_needed", index)}
            />
            <label>{capitalizeWords("instructional_activities")}:</label>
            <textarea
              name="instructional_activities"
              placeholder={subtopic.instructional_activities.join(", ")}
              onChange={(e) => handleChange(e, "subject", "instructional_activities", index)}
            />
            <label>{capitalizeWords("assessment_methods")}:</label>
            <textarea
              name="assessment_methods"
              placeholder={subtopic.assessment_methods.join(", ")}
              onChange={(e) => handleChange(e, "subject", "assessment_methods", index)}
            />
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;