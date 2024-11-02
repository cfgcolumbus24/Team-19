from app import app
from models import db, LessonPlan

def view_database():
    with app.app_context():
        
        lessons = LessonPlan.query.all()
        
        if not lessons:
            print("No lessons found in database.")
            return
            
        # Print each lesson's details
        for lesson in lessons:
            print(f"""
Lesson ID: {lesson.id}
Subject: {lesson.subject}
Lesson Number: {lesson.lesson_number}
Author: {lesson.author}
Likes: {lesson.likes}
JSON Content: {lesson.json_content}
Created At: {lesson.created_at}
{'='*50}
""")

if __name__ == "__main__":
    view_database()