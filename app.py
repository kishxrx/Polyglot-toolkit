from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder="dist")
CORS(app)

# API endpoint
@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    q = data.get("q")
    source = data.get("source")
    target = data.get("target")
    
    # Dummy translation (replace with real API call)
    translated_text = f"[{source} → {target}] {q}"
    
    return jsonify({"translatedText": translated_text})

# Serve React frontend
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
