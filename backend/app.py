# app.py
from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["profile_db"]

@app.route("/api/personal", methods=["GET"])
def get_personal():
    data = db.personal_data.find_one({}, {"_id": 0})
    return jsonify(data)

@app.route("/api/work", methods=["GET"])
def get_work():
    work_data = list(db.work_experience.find({}, {"_id": 0}))
    return jsonify({"experience": work_data})

@app.route("/api/hobbies", methods=["GET"])
def get_hobbies():
    hobbies_data = db.hobbies.find_one({}, {"_id": 0})
    return jsonify(hobbies_data)

@app.route("/api/tech", methods=["GET"])
def get_tech_stack():
    stack = list(db.tech_stack.find({}, {"_id": 0}))
    return jsonify(stack)


if __name__ == "__main__":
    app.run(debug=True)
