import io
import os
from google.cloud import vision


def detect_text_google_cloud(image_path):
    client = vision.ImageAnnotatorClient()

    with io.open(image_path, 'rb') as image_file:
        content = image_file.read()
    image = vision.Image(content=content)

    response = client.text_detection(image=image)
    texts = response.text_annotations

    if texts:
        detected_text = texts[0].description
        print("Detected text:")
        print(detected_text)
    else:
        print("No text detected.")

    if response.error.message:
        raise Exception(f"Error from Vision API: {response.error.message}")

image_path = "/Users/nicolesin/Documents/dev_env/jpmc/Team-19/image_upload/handwriting.webp"
detect_text_google_cloud(image_path)
