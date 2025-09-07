# 🌍 Polyglot Toolkit  
*A lightweight web app for random text generation + instant translations*  

🚀 **Live Demo:** [Deployed on Render](https://polyglot-app.onrender.com)  

---

## ✨ Features  
- 🔀 **Random Text Generator** – Quickly generate sample text for testing, UI mockups, or creative writing prompts.  
- 🌐 **Language Translation** – Translate any text between multiple languages (English, French, Spanish, German, Tamil, Japanese, and more).  
- 📱 **Responsive Design** – Clean, centered layout optimized for both desktop and mobile.  
- 🎨 **User-Friendly UI** – Dropdown language selectors with improved styling for readability.  
- ⚡ **Fast & Free** – Uses `deep-translator` (Google Translate integration) without requiring API keys.  

---

## 🛠️ Tech Stack  
**Frontend:** React + Tailwind CSS  
**Backend:** Flask (Python)  
**Translation Engine:** Deep Translator (`deep-translator` Python package)  
**Deployment:** Render  
**Build Tools:** npm, pip  

---

 

## 🏗️ Architecture  
```
React (Frontend) ---> Flask API (/translate) ---> Deep Translator ---> Translation Response
```

---

## 🚀 Getting Started  

### 1. Clone the repo  
```bash
git clone https://github.com/username/polyglot-toolkit.git
cd polyglot-toolkit
```

### 2. Install backend dependencies  
```bash
pip install -r requirements.txt
```

### 3. Install frontend dependencies & build  
```bash
npm install
npm run build
```

### 4. Run the Flask server locally  
```bash
python app.py
```
Your app will be available at: **http://127.0.0.1:5000**

---

## 🌍 Deployment on Render  

1. Push your code to GitHub.  
2. Connect the repo to Render and create a **Web Service**.  
3. Add the following:  
 - **Start Command:**  
   ```bash
     python app.py
     ```  
 - **Build Command:**  
   ```bash
     pip install -r requirements.txt && npm install && npm run build
     ```  


---

## 🧩 Challenges & Solutions  

| Problem | Solution |
|---------|----------|
| ❌ **`googletrans` failed on Render (`cgi` missing)`** | ✅ Switched to [`deep-translator`](https://pypi.org/project/deep-translator/) which is actively maintained |
| ❌ Frontend showed `Not Found` after deployment | ✅ Served React `dist/` folder directly via Flask static routes |
| ❌ Navbar overlapped card on mobile | ✅ Used Tailwind responsive classes to adjust layout for small screens |
| ❌ Dropdown text invisible (white on white) | ✅ Added background + text color styling |

---

## 🔮 Future Enhancements  
- 🎤 Voice input + speech translation  
- 📦 Dockerized version for portable deployment  
- 💾 Save past translations in user history  
- 🌙 Dark mode UI toggle  
- 🔗 Deploy on **Vercel/Netlify (frontend)** + **Render/Heroku (backend)** split architecture  

---

## 👨‍💻 Author  
**Kishore**  
- 🌐 [GitHub](https://github.com/username)  
- 💼 [LinkedIn](https://linkedin.com/in/profile)  

---
> Demonstrates full-stack development with React and Flask, including building dynamic features, handling translations, and deploying to cloud platforms while solving real-world deployment challenges.
