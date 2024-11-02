import io
import os
import json
from flask import Flask, request, jsonify
from google.cloud import vision
from openai import OpenAI
from dotenv import load_dotenv
import time

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
app = Flask(__name__)

def detect_text_google_cloud(image_content):
    client_vision = vision.ImageAnnotatorClient()
    image = vision.Image(content=image_content)

    try:
        response = client_vision.text_detection(image=image)
        texts = response.text_annotations

        if texts:
            detected_text = texts[0].description
            return detected_text
        else:
            print("No text detected in the image.")
            return ""
    except Exception as e:
        print(f"An error occurred with Google Vision API: {e}")
        return ""

def classify_text_with_openai(text):
    
    prompt = f"""
    Convert the following lesson plan text into a JSON structure with the fields "subject," "subtopic," "learning objectives," "materials needed," "instructional activities," and "assessment methods."
    Text:
    {text}

    Output the JSON format:
    {{
      "lesson_id": "LP001",
      "subject": {{
        "headline": "Main subject (e.g., Math)",
        "subtopic": "Specific focus within the subject (e.g., Multiplication)"
      }},
      "learning_objectives": {{
        "knowledge_objectives": [],
        "skill_objectives": [],
        "behavioral_goals": []
      }},
      "materials_needed": [],
      "instructional_activities": [],
      "assessment_methods": []
    }}
    """

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=500,
            temperature=0.5
        )
  
        json_output = response.choices[0].message.content.strip()
        return json_output

    except Exception as e:
        print(f"An error occurred with OpenAI API: {e}")
        time.sleep(60)
        return classify_text_with_openai(text)  

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files['image']
    image_content = image_file.read()

    # Process the image content with Google Vision API
    extracted_text = detect_text_google_cloud(image_content)
    if not extracted_text:
        return jsonify({"error": "No text detected in the image"}), 400

    # Format the extracted text using OpenAI's API
    try:
        json_output = classify_text_with_openai(extracted_text)
        response_json = json.loads(json_output)  # Convert JSON string to dictionary
        return jsonify(response_json)
    except Exception as e:
        print(f"An error occurred during JSON formatting: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

