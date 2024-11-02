import io
import os
from openai import OpenAI
import json
from google.cloud import vision
from dotenv import load_dotenv
import time

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def detect_text_google_cloud(image_path):
    client_vision = vision.ImageAnnotatorClient()

    try:
        print("Opening image for Google Vision API...")
        with io.open(image_path, 'rb') as image_file:
            content = image_file.read()
        image = vision.Image(content=content)

        response = client_vision.text_detection(image=image)
        texts = response.text_annotations

        if texts:
            detected_text = texts[0].description
            print("Detected text from image:", detected_text)  # Debug print
            return detected_text
        else:
            print("No text detected in the image.")
            return ""

        if response.error.message:
            raise Exception(f"Error from Vision API: {response.error.message}")
    except Exception as e:
        print(f"An error occurred with Google Vision API: {e}")
        return ""

def classify_text_with_openai(text):
   
    prompt = f"""
    Convert the following lesson plan text into a JSON structure with the fields "subject," "subtopic," "learning objectives," "materials needed," "instructional activities," and "assessment methods."
    The "subject" can only be classified into these categories: 
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
            messages=[
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            temperature=0.5
        )
  
        json_output = response.choices[0].message.content.strip()
        return json_output

    except Exception as e:
        print(f"An error occurred with OpenAI API: {e}")
        time.sleep(60)
        return classify_text_with_openai(text)  

def process_lesson_plan(image_path):
    print("Processing lesson plan...")
    extracted_text = detect_text_google_cloud(image_path)
    if not extracted_text:
        return "No text detected in the image."

    try:
        
        json_output = classify_text_with_openai(extracted_text)
        with open("lesson_plan.json", "w") as file:
            json.dump(json.loads(json_output), file, indent=2)
        print("Lesson plan saved to lesson_plan.json")
        return json_output
    except Exception as e:
        print(f"An error occurred during JSON formatting: {e}")
        return str(e)

image_path = "/Users/nicolesin/Documents/dev_env/jpmc/Team-19/image_upload/handwriting.webp"
print(process_lesson_plan(image_path))

