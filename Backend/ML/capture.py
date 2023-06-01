import cv2
import argparse
import os
import numpy as np
from keras.models import model_from_json
import time
import eel
import winsound
import sys
import webbrowser


frequency=5000
duration=1000
webbrowser.register('brave', None, webbrowser.BackgroundBrowser("C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe"))
eel.init(f'{os.path.dirname(os.path.realpath(__file__))}/WD_INNOVATIVE')
# emotions=["angry", "happy", "sad", "neutral"]
# fishface = cv2.face.FisherFaceRecognizer_create()
# font = cv2.FONT_HERSHEY_SIMPLEX


# parser=argparse.ArgumentParser(description="Options for emotions based music player(Updating the model)")
# parser.add_argument("--update", help="Call for taking new images and retraining the model.", action="store_true")
# args=parser.parse_args()    
# facedict={}
# video_capture=cv2.VideoCapture(0)
# facecascade=cv2.CascadeClassifier("D:/Major Pro/binaural/Backend/ML/haarcascade_frontalface_default.xml")
# def crop(clahe_image, face):
#     for (x, y, w, h) in face:
#         faceslice=clahe_image[y:y+h, x:x+w]
#         faceslice=cv2.resize(faceslice, (350, 350))
#         facedict["face%s" %(len(facedict)+1)]=faceslice
#     return faceslice

# def grab_face():
#     ret, frame=video_capture.read()
#     cv2.imwrite('test.jpg', frame)
#     cv2.imwrite("images/main%s.jpg" %count, frame)
#     gray=cv2.imread('test.jpg',0)
#     gray=cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#     clahe=cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
#     clahe_image=clahe.apply(gray)
#     return clahe_image

# def detect_face(retry):
#     clahe_image=grab_face()
#     face=facecascade.detectMultiScale(clahe_image, scaleFactor=1.1, minNeighbors=15, minSize=(10, 10), flags=cv2.CASCADE_SCALE_IMAGE)
#     if len(face)>=1:
#         faceslice=crop(clahe_image, face)
#         #return faceslice
#     else:
#         retry = retry-1
#         if retry > 0:
#             detect_face(retry)
#         elif retry==0:
#             print("No/Multiple faces detected!!, passing over the frame")
#             sys.exit()

# def checkForFolders(emotions):
#     for emotion in emotions:
#         if os.path.exists("dataset/%s" %emotion):
#             pass
#         else:
#             os.makedirs("dataset/%s" %emotion)

# def identify_emotions():
#     prediction=[]
#     confidence=[]

#     for i in facedict.keys():
#         pred, conf=fishface.predict(facedict[i])
#         cv2.imwrite("images/%s.jpg" %i, facedict[i])
#         prediction.append(pred)
#         confidence.append(conf)
#     output=emotions[max(set(prediction), key=prediction.count)]    
#     print("You seem to be %s" %output) 
#     facedict.clear()
#     winsound.Beep(frequency, duration)
#     # Stop the webcam
#     video_capture.release()

def identify_emotions():
    
    # Load model architecture from JSON file
    model_architecture = open("D:/Major Pro/binaural/Backend/ML/model (1).json", "r").read()
    model = model_from_json(model_architecture)

    # Load model weights
    model.load_weights('D:/Major Pro/binaural/Backend/ML/model (1).h5')

    face_haar_cascade = cv2.CascadeClassifier('D:/Major Pro/binaural/Backend/ML/haarcascade_frontalface_default.xml')

    # Capture a picture
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()

    # Save captured picture to file
    cv2.imwrite("test.jpg", frame)

    cap.release()
    winsound.Beep(frequency, duration)

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
        print(predicted_emotion)

    cv2.imshow('Face Emotion Recognition', captured_img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
   
@eel.expose
def getEmotion():
    return identify_emotions()

eel.start(f'{os.path.dirname(os.path.realpath(__file__))}/WD_INNOVATIVE/main.html' ,  mode='brave')
