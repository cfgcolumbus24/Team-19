# Going as planned: Lesson Plan Management System

## Overview

This project is a comprehensive Lesson Plan Management System designed to streamline the process of creating, managing, and sharing lesson plans. The system leverages modern web technologies and cloud services to provide a seamless experience for educators.

## Features

- **Image Upload and Text Extraction**: Upload images of lesson plans and extract text using Google Cloud Vision API.
- **Text Classification**: Classify extracted text using OpenAI to organize lesson plans.
- **User Interface**: Interactive web interface built with React and Bootstrap for managing lesson plans.
- **Responsive Design**: Mobile-friendly design to ensure accessibility on various devices.
- **Quiz App**: Generate and take quizzes based on lesson plans to reinforce learning.

## Project Structure

Lesson Plan Management System
├── backend
│   ├── __pycache__
│   ├── add_data.py
│   ├── app.py
│   ├── clear_db.py
│   ├── instance
│   ├── models.py
│   ├── requirements.txt
│   └── view_data.py
├── Front
│   ├── .DS_Store
│   ├── frontend
│   │   ├── .gitignore
│   │   ├── build
│   │   │   ├── asset-manifest.json
│   │   │   ├── index.html
│   │   │   ├── manifest.json
│   │   │   └── ...
│   │   ├── package.json
│   │   ├── public
│   │   ├── README.md
│   │   └── src
│   │       ├── HomePage.js
│   │       ├── LessonPage.js
│   │       ├── SubjectPage.js
│   │       ├── components
│   │       │   ├── MainDrop.js
│   │       │   ├── Header.js
│   │       │   ├── Footer.js
│   │       │   ├── ImageCarousel.js
│   │       │   ├── quiz.jsx
│   │       │   ├── quizContent.jsx
│   │       │   └── quizApp.jsx
│   │       └── ...
├── image_upload
│   ├── __pycache__
│   ├── app.py
│   ├── lesson_plan.json
│   ├── plan.json
│   ├── questions.json
│   ├── quiz.py
│   ├── scanner_google_cloud.py
│   ├── scanner_to_json_webcam.py
│   ├── scanner_to_json.py
│   ├── scanner.py
│   └── templates
│       └── upload.html
├── package.json
└── README.md

## Backend

The backend is implemented using Flask and provides endpoints for uploading images, extracting text, and managing lesson plans. It serves as the core of the application, handling data processing and storage.

### Key Features

- **RESTful API**: Provides endpoints for CRUD operations on lesson plans.
- **Image Processing**: Handles image uploads and integrates with Google Cloud Vision API for text extraction.
- **Data Management**: Manages lesson plan data using SQLAlchemy for database interactions.

### Files

- `backend/app.py`: Main Flask application that initializes the server and routes.
- `backend/add_data.py`: Script to add sample data to the database for testing purposes.
- `backend/clear_db.py`: Script to clear the database, useful for resetting the environment.
- `backend/models.py`: Defines the database models using SQLAlchemy.
- `backend/view_data.py`: Script to view data in the database, useful for debugging.

### Setup

1. Install dependencies:
    ```sh
    pip install -r backend/requirements.txt
    ```

2. Run the application:
    ```sh
    python backend/app.py
    ```

## Frontend

The frontend is implemented using React and Bootstrap. It provides a user-friendly interface for educators to interact with the lesson plans. The design is responsive, ensuring accessibility on various devices.

### Key Features

- **React Components**: Modular components for different parts of the application, such as headers, footers, and content sections.
- **Bootstrap Integration**: Utilizes Bootstrap for responsive design and styling.
- **Routing**: Uses React Router for client-side routing, enabling smooth navigation between pages.

### Files

- `Front/frontend/src/HomePage.js`: Home page component that includes a header, video background, introduction section, image carousel, and teacher tools section.
- `Front/frontend/src/LessonPage.js`: Lesson page component that displays lesson details and available lesson plans.
- `Front/frontend/src/SubjectPage.js`: Subject page component that lists lessons for a specific subject.
- `Front/frontend/src/components/MainDrop.js`: Dropdown component for selecting subjects.
- `Front/frontend/src/components/Header.js`: Header component that includes navigation links and the Opportunity International logo.
- `Front/frontend/src/components/Footer.js`: Footer component that provides information about the organization's purpose and additional resources.
- `Front/frontend/src/components/ImageCarousel.js`: Image carousel component for displaying staff images.
- `Front/frontend/src/components/quiz.jsx`: Quiz component for taking quizzes based on lesson plans.
- `Front/frontend/src/components/quizContent.jsx`: Contains the content for the quizzes.
- `Front/frontend/src/components/quizApp.jsx`: Main component for the quiz application.

### Setup

1. Navigate to the frontend directory:
    ```sh
    cd Front/frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the application:
    ```sh
    npm start
    ```

## Image Upload

The image upload functionality is implemented in the `image_upload` directory. It uses Flask to handle image uploads and Google Cloud Vision API to extract text from images. This component is crucial for converting physical lesson plans into digital format.

### Key Features

- **Image Upload**: Allows users to upload images of lesson plans.
- **Text Extraction**: Uses Google Cloud Vision API to extract text from uploaded images.
- **Text Classification**: Classifies extracted text using OpenAI and formats it into JSON.

### Files

- `image_upload/app.py`: Main Flask application for image upload.
- `image_upload/scanner_google_cloud.py`: Script to extract text from images using Google Cloud Vision API.
- `image_upload/scanner_to_json.py`: Script to classify text using OpenAI and format it into JSON.
- `image_upload/templates/upload.html`: HTML template for the upload page.

### Setup

1. Install dependencies:
    ```sh
    pip install -r image_upload/requirements.txt
    ```

2. Run the application:
    ```sh
    python image_upload/app.py
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

OPENAI_API_KEY=your_openai_api_key GOOGLE_APPLICATION_CREDENTIALS=path_to_your_google_cloud_credentials.json