import cv2
import numpy as np
from keras.models import model_from_json
import winsound
import sys

frequency=5000
duration=1000
 
facedict={}
video_capture=cv2.VideoCapture(0)

def crop(clahe_image, face):
    for (x, y, w, h) in face:
        faceslice=clahe_image[y:y+h, x:x+w]
        faceslice=cv2.resize(faceslice, (350, 350))
        facedict["face%s" %(len(facedict)+1)]=faceslice
    return faceslice

def grab_face():
    ret, frame=video_capture.read()
    
    cv2.imwrite('test.jpg', frame)
    cv2.imwrite("images/main.jpg" , frame)
    
    video_capture.release()
    winsound.Beep(frequency, duration)
    
    gray=cv2.imread('test.jpg',0)
    gray=cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    clahe=cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    clahe_image=clahe.apply(gray)
    return clahe_image

def detect_face(retry):
    clahe_image=grab_face()
    face=face_haar_cascade.detectMultiScale(clahe_image, scaleFactor=1.1, minNeighbors=15, minSize=(10, 10), flags=cv2.CASCADE_SCALE_IMAGE)
    if len(face)>=1:
        faceslice=crop(clahe_image, face)
    else:
        retry = retry-1
        if retry > 0:
            detect_face(retry)
        elif retry==0:
            print("No/Multiple faces detected!!, passing over the frame")
            sys.exit()
    
# Load model architecture from JSON file
model_architecture = open("D:/Major Pro/binaural/Backend/ML/model (1).json", "r").read()
model = model_from_json(model_architecture)

# Load model weights
model.load_weights('D:/Major Pro/binaural/Backend/ML/model (1).h5')

face_haar_cascade = cv2.CascadeClassifier('D:/Major Pro/binaural/Backend/ML/haarcascade_frontalface_default.xml')

retry = 10

detect_face(retry)

# Load the captured image
captured_img = cv2.imread("test.jpg")
gray_img = cv2.cvtColor(captured_img, cv2.COLOR_BGR2GRAY)

# Perform face detection
faces_detected = face_haar_cascade.detectMultiScale(gray_img, 1.32, 5)

for (x, y, w, h) in faces_detected:
    cv2.rectangle(captured_img, (x, y), (x+w, y+h), (255, 0, 0), thickness=7)
    roi_gray = gray_img[y:y+w, x:x+h]
    roi_gray = cv2.resize(roi_gray, (48, 48))
    img_pixels = np.expand_dims(roi_gray, axis=0)
    img_pixels = img_pixels.reshape(-1, 48, 48, 1)
    img_pixels = img_pixels / 255.0

    predictions = model.predict(img_pixels)

    max_index = np.argmax(predictions[0])
    emotions = ('angry', 'disgust', 'fear', 'happy', 'sad', 'surprise', 'neutral')
    predicted_emotion = emotions[max_index]

    cv2.putText(captured_img, predicted_emotion, (int(x), int(y)), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
    # print(predicted_emotion)
    sys.stdout.write(predicted_emotion)
    sys.stdout.flush()

cv2.imshow('Face Emotion Recognition', captured_img)
cv2.waitKey(0)
cv2.destroyAllWindows()
