from PIL import Image
import pytesseract

def detect_text(image_path, languages="eng"):
    languages = "eng+fra+spa+deu+ita+por+rus+jpn+chi_sim+chi_tra+ara+hin+tam+kan+tel+mal+guj+pan+tha+khm+vie+mys+heb+syc+tha"
    image = Image.open(image_path)
    
    text = pytesseract.image_to_string(image, lang=languages)
    return text

print(detect_text("/Users/nicolesin/Documents/dev_env/jpmc/Team-19/image_upload/swahili_lesson.png"))
