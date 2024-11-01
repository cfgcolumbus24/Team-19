from marshmallow import Schema, fields

class LessonData(Schema):
    lesson_plan_id = fields.Int(dump_only=True)
    subject = fields.Str(required=True)
    lesson_number = fields.Int(required=True)
    lesson_name = fields.Str(required=True)
    content = fields.Str(required=True)
    author = fields.Str(required=True)
    date_uploaded = fields.DateTime(dump_only=True)