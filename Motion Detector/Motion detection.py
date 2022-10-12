# Making a Motion detector 

import numpy as np
import cv2

video = cv2.VideoCapture("cars.mp4")
frame1 = None
while True:
    ret , frame = video.read()
    gray = cv2.GaussianBlur(frame, (21,21), 0)
    gray = cv2.cvtColor(gray, cv2.COLOR_BGR2GRAY)
    if frame1 is None:
        frame1 = gray
        continue
    diff = cv2.absdiff(frame1,gray)
    thresh= cv2.threshold(diff, 50, 255, cv2.THRESH_BINARY)[1]
    d = cv2.dilate(thresh, None, iterations = 4)
    (contours,_) = cv2.findContours(d, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    for c in contours:
        if cv2.contourArea(c) < 1000:
            continue
        (x,y,w,h) = cv2.boundingRect(c)
        cv2.rectangle(frame, (x,y), (x+w, y+h), (0,255,0), 2)
    cv2.imshow("Detection", frame)
    key = cv2.waitKey(1)
    if key == ord('q'):
        break
video.release()
cv2.destroyAllWindows()

    