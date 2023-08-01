from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/getname/<name>")
@cross_origin()
def get_name(name):
    if name.lower() == "yoav":
        return jsonify({"name": "Ilan", 'success': True}), 200
    return jsonify({"name": "User not found", 'success': False}), 404

@app.route('/')
@cross_origin()
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(debug=True)
    # app.run(host='0.0.0.0', debug=False, port=80)