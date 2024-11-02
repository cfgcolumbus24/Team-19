import React from 'react';
import { Container, Dropdown, Button } from 'react-bootstrap';
import { BsCamera } from 'react-icons/bs';
import './TeacherTools.css'; // Create this CSS file for custom styling

function TeacherTools() {
  return (
    <Container className="teacher-tools-container p-4 rounded shadow my-5">
      <h1 className="teacher-tools-heading text-center mb-4">Teacher Learning Tools</h1>
      <div className="d-flex justify-content-center gap-3">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg">
            Select Subject
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/math" className="dropdown-item">Math</Dropdown.Item>
            <Dropdown.Item href="/science" className="dropdown-item">Science</Dropdown.Item>
            <Dropdown.Item href="/english" className="dropdown-item">English</Dropdown.Item>
            <Dropdown.Item href="/reading" className="dropdown-item">Reading</Dropdown.Item>
            <Dropdown.Item href="/social-studies" className="dropdown-item">Social Studies</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button href="https://www.google.com" target="_blank" variant="light" size="lg">
          Scan/Upload Lesson Plan <BsCamera style={{ marginLeft: '8px' }} />
        </Button>
      </div>
    </Container>
  );
}

export default TeacherTools;
