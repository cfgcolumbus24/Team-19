from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from db import db
from sqlalchemy.exc import IntegrityError, SQLAlchemyError
from models import LessonPlanModel
from schemas import LessonData

blp = Blueprint("lesson_plans", __name__, description="Operations on lesson plans")

@blp.route("/lessonplan")
class LessonPlan(MethodView):
    @blp.response(200, LessonData)
    def get(self, lesson_plan_id):
        lesson_plan = LessonPlanModel.query.get_or_404(lesson_plan_id)
        return lesson_plan