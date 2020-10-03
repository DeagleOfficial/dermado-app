from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import keras
from keras.preprocessing import image

app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')

@app.route('/')
def index():
   return app.send_static_file('index.html')

@app.route('/uploader', methods=['POST', 'GET'])
def make_file():
   if request.method == "POST":
        file = request.data
        f = open("uploads/upload.jpg", "wb")
        f.write(file)
        f.close()
        print("file created")
        return jsonify(
            name = get_pred_allergy(),
            cancer = get_pred_cancer()
        )



def get_pred_allergy():
    from keras.applications.densenet import preprocess_input
    model = tf.keras.models.load_model('./models/Skin_allergy_HAM_densenet169.h5')
    image_path = './uploads/upload.jpg'

    image = tf.keras.preprocessing.image.load_img(image_path, target_size=(224, 224)) 
    input_arr = keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr])  # Convert single image to a batch.
    pred = model.predict(input_arr)
    descriptions = ['For seborrheic keratosis, treatment usually includes liquid nitrogen, electrodesiccation, hyfercation and curettage', 'Treatments are: Dermabrasion, Tangential (shave) excision, Chemical Peels, Laser Ablation', 'Treatments include: freezing (with liquid nitrogen), localized corticosteroid injection, laser therapy, shaving the top to flatten the growth', 'Treatment for early-stage melanomas includes surgery to remove the melanoma, whereas treatments for melanomas which have spread beyond the skin includes chemotherapy or radiation therapy or immunotherapy', 'Treatments include Pulsed-dye laser(Vbeam) and Intense pulsed light', 'Treatments include chemotherapy, photodynamic therapy, radiation therapy, excisional surgery', 'At-home remedies include appyling 5-fluorouracil (5-FU) cream or Diclofenac sodium gel or Imiquimod cream. Do visit a dermatologist before any usage']
    labels = ['Benign Keratosis-Like Lesions', 'Melanocytic Nevi', 'Dermatofibroma', 'Melanoma', 'Vascular Lesions', 'Basal Cell Carcinoma', 'Actinic Keratosis']
    print (labels[np.argmax(pred)]) 
    return [labels[np.argmax(pred)] + ". " + descriptions[np.argmax(pred)]]

def get_pred_cancer():
    from keras.applications.resnet50 import preprocess_input
    path = './uploads/upload.jpg' 
    model = tf.keras.models.load_model('models/Skin_cancer6.h5')
    img = image.load_img(path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    preds = model.predict(x)
    labels = ['Benign', 'Malignant']
    print(preds)
    print (labels[np.argmax(preds)])
    return (labels[np.argmax(preds)])

if __name__ == '__main__':
    app.run()