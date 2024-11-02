from db import db


class Subject(db.Model):
    __tablename__ = "subjects"
    
    subject_id = db.Column(db.Integer, primary_key=True)
    subject_name = db.Column(db.String(80), nullable=False)