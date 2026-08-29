# ✨ Are You Single Too? (Interactive Romantic Web App)

A modern, interactive, romantic & humorous web experience with smooth animations, Web Audio sound effects, confetti celebrations, and playful mechanics.

---

## 📁 Project Structure (Separated Languages & Assets)

```
foryah/
├── index.html            # Main HTML5 entry point (Vercel ready)
├── css/
│   └── style.css         # Modern glassmorphism & responsive stylesheet
├── js/
│   ├── data.js           # Datasets for choices, emojis & Taglish/English copy
│   ├── audio.js          # Web Audio synth for sounds & music fallback
│   └── app.js            # Core game logic, dodging physics, confetti, recap
├── images/               # Optional custom photos (rizz_photo.jpg, meme_photo.jpg, etc.)
├── audio/                # Optional background music (bg_music.mp3)
├── vercel.json           # Vercel deployment configuration
└── package.json          # Local development scripts
```

---

## 🚀 How to Run Locally

### Option 1: Using Vite (Recommended)
```bash
npm install
npm run dev
```
Open the provided `http://localhost:5173` link in your browser.

### Option 2: Using Node Static Server
```bash
npx serve .
```

### Option 3: Using Python
```bash
python -m http.server 3000
```

---

## 🌐 Deploy to Vercel (1-Click)

1. Push your repository to GitHub or run:
```bash
npx vercel
```
2. Vercel automatically detects `index.html` and deploys your site globally with fast CDN & SSL!

---

## 🎨 Customizing Photos & Music
You can drop any image or audio file into the respective folders:
- `images/rizz_photo.jpg` -> Question photo
- `images/meme_photo.jpg` -> Scene 3 reaction photo
- `images/hugot_photo.jpg` -> Scene 10 ending photo
- `audio/bg_music.mp3` -> Background music (plays at the hugot ending)

*(Note: Even without any image or audio files, built-in emoji stickers and synthesized Web Audio effects work seamlessly out of the box!)*
