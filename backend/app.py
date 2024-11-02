from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, LessonPlan
app = Flask(__name__)

# Updated CORS configuration
CORS(app, 
     resources={r"/*": {"origins": "*"}},
     supports_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lessons.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# root
@app.route('/')
def home():
    return jsonify({"message": "WORKING"})

# subjects 
@app.route('/api/subjects', methods=['GET', 'OPTIONS'])
def get_subjects():
    if request.method == "OPTIONS":
        return "", 204
    try:
        subjects = db.session.query(LessonPlan.subject).distinct().all()
        subject_list = [subject[0] for subject in subjects]
        print("Subjects found:", subject_list)
        return jsonify(subject_list)
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

# lessons
@app.route('/api/lessons', methods=['POST'])
def upload_lesson():
    data = request.get_json()
    new_lesson = LessonPlan(
        json_content=data['json_content'],
        author=data['author'],
        subject=data['subject'],
        lesson_number=data['lesson_number']
    )
    db.session.add(new_lesson)
    db.session.commit()
    return jsonify({'message': 'Lesson uploaded successfully'}), 201

# lessons by subject
@app.route('/api/lessons/<subject>', methods=['GET'])
def get_lessons_by_subject(subject):
    lessons = LessonPlan.query.filter_by(subject=subject).all()
    return jsonify([{
        'id': lesson.id,
        'author': lesson.author,
        'subject': lesson.subject,
        'lesson_number': lesson.lesson_number,
        'likes': lesson.likes
    } for lesson in lessons])

# things in lessons
@app.route('/api/lessons/<subject>/<int:lesson_number>', methods=['GET'])
def get_lesson_content(subject, lesson_number):
    lessons = LessonPlan.query.filter_by(
        subject=subject,
        lesson_number=lesson_number
    ).all()
    return jsonify([{
        'id': lesson.id,
        'json_content': lesson.json_content,
        'author': lesson.author,
        'likes': lesson.likes
    } for lesson in lessons])

@app.route('/api/lessons/<subject>/<int:lesson_number>/<int:planId>', methods=['GET'])
def get_lesson_plan(subject, lesson_number,planId):
    lesson = LessonPlan.query.filter_by(
        subject=subject,
        lesson_number=lesson_number,
        id=planId
    ).one()
    lesson.likes += 1
    db.session.commit()
    return jsonify({
        'id': lesson.id,
        'json_content': lesson.json_content,
        'author': lesson.author,
        'likes': lesson.likes
        })
    
@app.route('/api/lessons/<int:lesson_id>/like', methods=['POST'])
def like_lesson(lesson_id):
    lesson = LessonPlan.query.get_or_404(lesson_id)
    lesson.likes += 1
    db.session.commit()
    return jsonify({'likes': lesson.likes})

# errors
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Resource not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0')