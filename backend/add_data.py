from app import app
from models import db, LessonPlan

def add_sample_data():
    with app.app_context():
        lessons = [
            {
                "json_content": {
                    "title": "Introduction to Algebra",
                    "objectives": ["Understand variables", "Basic equations"],
                    "materials": ["Textbook", "Calculator"]
                },
                "author": "Again John Doe",
                "subject": "Math",
                "lesson_number": 1,
            },
            {
                "json_content": {
                    "title": "Cell Biology",
                    "objectives": ["Cell structure", "Cell function"],
                    "materials": ["Microscope", "Slides"]
                },
                "author": "Again Jane Smith",
                "subject": "Science",
                "lesson_number": 1,
            },
            {
                "json_content": {
                    "title": "Essay Writing",
                    "objectives": ["Thesis statements", "Paragraph structure"],
                    "materials": ["Writing guide", "Examples"]
                },
                "author": "Again Bob Wilson",
                "subject": "English",
                "lesson_number": 1,
            },
                        {
                "json_content": {
                    "title": "Introduction to Algebra",
                    "objectives": ["Understand variables", "Basic equations"],
                    "materials": ["Textbook", "Calculator"]
                },
                "author": "Again John Doe",
                "subject": "Math",
                "lesson_number": 2,
            },
            {
                "json_content": {
                    "title": "Cell Biology",
                    "objectives": ["Cell structure", "Cell function"],
                    "materials": ["Microscope", "Slides"]
                },
                "author": "Again Jane Smith",
                "subject": "Science",
                "lesson_number": 2,
            },
            {
                "json_content": {
                    "title": "Essay Writing",
                    "objectives": ["Thesis statements", "Paragraph structure"],
                    "materials": ["Writing guide", "Examples"]
                },
                "author": "Again Bob Wilson",
                "subject": "English",
                "lesson_number": 2,
            }
        ]

        for lesson_data in lessons:
            lesson = LessonPlan(**lesson_data)
            db.session.add(lesson)
        
        db.session.commit()
        print("Sample data added successfully!")

if __name__ == "__main__":
    add_sample_data()