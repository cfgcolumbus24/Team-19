from marshmallow import Schema, fields

class LessonData(Schema):
    lesson_plan_id = fields.Int(dump_only=True)
    subject = fields.Str(required=True)
    lesson_number = fields.Int(required=True)
    lesson_name = fields.Str(required=True)
    content = fields.Str(required=True)
    author = fields.Str(required=True)
    date_uploaded = fields.DateTime(dump_only=True)

class Author(Schema):
    author_id = fields.Int(dump_only=True)
    author_name = fields.Str(required=True)

class SubjectType(Enum):
    MATH = "math"
    LANGUAGE = "language"
    HIST = "history"
    SCIENCE = "science"
class Subject(Schema):
    subject_id = fields.Int(dump_only=True)
    subject_name = fields.Str(required=True)

