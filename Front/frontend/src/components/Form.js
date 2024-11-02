import React, { useState } from 'react';
import './Form.css';

const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

const Form = () => {
  const initialData = {
    subject: {
      headline: "Writing Skills",
      subtopic: "Improving Handwriting"
    },
    learning_objectives: {
      knowledge_objectives: ["Identify factors that affect handwriting legibility"],
      skill_objectives: ["Practice different handwriting techniques"],
      behavioral_goals: ["Demonstrate improved handwriting legibility"]
    },
    materials_needed: ["Pen", "Paper", "Laptop"],
    instructional_activities: ["Discuss factors affecting handwriting legibility", "Practice different handwriting techniques", "Receive feedback on handwriting"],
    assessment_methods: ["Handwriting samples before and after practice", "Observation of handwriting during practice"]
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e, key, subKey) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      if (subKey) {
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
      {Object.keys(initialData).map((key) => (
        <div key={key}>
          <h3>{key.replace(/_/g, ' ')}</h3>
          {typeof initialData[key] === 'object' && !Array.isArray(initialData[key]) ? (
            Object.keys(initialData[key]).map((subKey) => (
              <div key={subKey}>
                <label>{subKey.replace(/_/g, ' ')}:</label>
                <input
                  type="text"
                  name={subKey}
                  value={formData[key][subKey]}
                  onChange={(e) => handleChange(e, key, subKey)}
                />
              </div>
            ))
          ) : (
            <div>
              <label>{key.replace(/_/g, ' ')}:</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={(e) => handleChange(e, key)}
              />
            </div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;