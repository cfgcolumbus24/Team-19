from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lessonPlan.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

 

class LessonPlan(db.Model):
    __tablename__ = "lessonplan"
    lesson_plan_id = db.Column(db.Integer,dump_only=True, primary_key = True)
    lesson_number = db.Column(db.Integer, required = True) 
    lesson_name = db.Column(db.String, required = True)
    subject = db.Column(db.String, required = True)
    content = db.Column(db.String, required = True)
    score = db.Column(db.Integer, dump_only = True, default = 0)
    date_uploaded =db.Column(db.DateTime, default=datetime.utcnow)

