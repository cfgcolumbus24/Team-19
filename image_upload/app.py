from flask import Flask, request, jsonify, render_template
import os
from datetime import datetime
from scanner_to_json import process_lesson_plan

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('upload.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    

    filename = f"{datetime.now().strftime('%Y%m%d%H%M%S')}_{file.filename}"
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)
    

    json_output = process_lesson_plan(file_path)
   
    os.remove(file_path)
    
    return jsonify({"lesson_plan": json_output}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
