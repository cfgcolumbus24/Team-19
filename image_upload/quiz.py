import os
from openai import OpenAI
import json
from dotenv import load_dotenv
import time

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_quiz_questions(lesson_plan):

    prompt = f"""
    Create multiple-choice quiz questions based on this lesson plan: Please generate more than 10 examples.
    {json.dumps(lesson_plan, indent=2)}

    Format the response as a JSON list where each item represents a question. Each question should be a dictionary with two keys:
    - "question": the quiz question as a string
    - "options": a list of four answer choices, where each choice is a dictionary containing:
      - "answer": the text of the answer
      - "is_correct": a boolean value (true if the answer is correct, false otherwise)

    Ensure only one answer is marked as correct per question. The questions should reflect the learning objectives, instructional activities, or other details in the lesson plan. For example, if the subject is handwriting, you might ask about techniques that improve legibility.
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

        questions = json.loads(response.choices[0].message.content.strip())

        with open("questions.json", "w") as outfile:
            json.dump(questions, outfile, indent=4)

        return questions

    except Exception as e:
        print(f"An error occurred with OpenAI API: {e}")
        time.sleep(60)
        return generate_quiz_questions(lesson_plan)

with open("lesson_plan.json", "r") as file:
    lesson_plan = json.load(file)

quiz_questions = generate_quiz_questions(lesson_plan)
print(json.dumps(quiz_questions, indent=2))
