from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from googletrans import Translator
import os

# ================= APP SETUP =================
app = Flask(__name__, static_folder="dist")  
CORS(app)
translator = Translator()

# ================= TRANSLATION API =================
@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    text = data.get("q")
    src = data.get("source", "auto")
    tgt = data.get("target", "en")
    
    try:
        translated = translator.translate(text, src=src, dest=tgt)
        return jsonify({"translatedText": translated.text})
    except Exception as e:
        return jsonify({"translatedText": f"⚠️ Error: {str(e)}"})

# ================= SERVE REACT FRONTEND =================
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

# ================= RUN SERVER =================
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
