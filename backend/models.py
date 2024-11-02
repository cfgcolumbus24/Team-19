from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class LessonPlan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    json_content = db.Column(db.JSON, nullable=False)
    author = db.Column(db.String(100), nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    lesson_number = db.Column(db.Integer, nullable=False)
    likes = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)