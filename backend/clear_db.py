from app import app, db
from models import LessonPlan

def reset_database():
    with app.app_context():
        # Drop all tables
        db.drop_all()
        
        # Recreate tables
        db.create_all()
        
        print("data cleared")

if __name__ == "__main__":
    reset_database()