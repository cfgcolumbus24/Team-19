from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lessonPlan.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

 

class LessonPlanModel(db.Model):
    __tablename__ = "lesson_plans"
    lesson_plan_id = db.Column(db.Integer, primary_key = True)
    subject = db.Column(db.String, nullable = False)
    lesson_number = db.Column(db.Integer, nullable = False) 
    lesson_name = db.Column(db.String, nullable = False)
    content = db.Column(db.String, nullable = False)
    author = db.Column(db.String, nullable = False)
    score = db.Column(db.Integer, default = 0)
    date_uploaded =db.Column(db.DateTime, default = datetime.datetime.now)

