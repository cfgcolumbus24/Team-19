import React from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import Header from './Header'; // Import the Header component
import OPING from '../assets/OPI.png'; 
import VideoFile from '../assets/4221485-hd_1920_1080_30fps.mp4';
import { BsCamera } from 'react-icons/bs';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <Header /> {/* Include Header at the top */}

      {/* Video container to crop the video */}
      <div className="video-crop-container">
        <video className="video-background" autoPlay loop muted>
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Enhanced Introduction Section */}
      <Container className="introduction-section py-5">
        <Row>
          <Col className="text-center">
            <div className="p-4 rounded shadow border translucent-background">
              <h1 className="poppins-bold">Welcome to Opportunity International</h1>
              <p className="lead poppins-bold">
                At Opportunity International, we believe that education is the cornerstone of a thriving society. 
                We are dedicated to empowering teachers and learners alike by providing the resources and tools 
                needed to inspire growth, creativity, and lasting knowledge.
              </p>
              <p className="poppins-bold">
                Teachers, you are the guiding light for the next generation. Your dedication, passion, and unwavering 
                commitment shape the future and open doors of opportunity for countless young minds. We are here to 
                support you every step of the way, offering curated lesson plans, interactive modules, and a platform 
                where your teaching can flourish. Keep believing in your incredible impact, and know that your efforts 
                are valued and transformative.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Teacher Tools Section */}
      <Container className="teacher-tools-container p-4 rounded shadow my-5 translucent-background">
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

      <Container fluid className="d-flex vh-100 p-0 content-overlay">
        <Row className="m-auto align-self-center w-100">
          <Col className="text-center">
            <img src={OPING} alt="OPI" className="img-fluid mb-4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
