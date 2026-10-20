# 🎯 NEET Tracker

A free, beautiful, **class-wise and chapter-wise study tracker for NEET aspirants**. Track Physics, Chemistry and Biology (Class 11 and 12, NCERT chapters) in one place. Works in any browser, no login, no server, no installation.

**Made by [Md Imamuddin](https://github.com/Mdimam0786)**

🔗 **Live demo:**  https://neet-tracker-zeta.vercel.app/


---

## ✨ Features

- 📚 **All NEET chapters**: Physics, Chemistry and Biology (Botany / Zoology tagged), Class 11 and 12
- ✅ **Per-chapter tracking**: Concept padh liya, NCERT line-by-line, Revision 1 / 2 / 3
- 🧮 **Questions counter**: solved vs target, with automatic chapter progress %
- 📅 **Deadlines**: set a date per chapter, overdue chapters are highlighted
- ⭐ **Weak chapter flag** and notes for formulas and mistakes
- 🔍 **Search and filters**: Class 11 / 12, Pending, Overdue, Weak, Done
- 📊 **Dashboard**: progress ring, days left for NEET, streak, subject-wise stats
- ⏱ **Focus timer** (25 / 50 min) that adds hours to your daily log automatically
- 📝 **Mock test tracker** with score graph (out of 720)
- ✍️ **Daily log** and one-click **email / copy daily report**
- 🌓 Dark and Light theme
- 💾 **Backup / Restore** your data as a JSON file
- 📲 Installable as an app (PWA) and works offline when hosted on HTTPS

## 🧮 How progress is calculated

| Part | Weight |
|---|---|
| Concept read | 25% |
| NCERT line-by-line | 15% |
| Questions (solved / target) | 40% |
| Revision 1, 2, 3 | 7% + 7% + 6% |

## 🚀 Run locally

No build step needed. Pick one:

```bash
# Option 1: Python
python -m http.server 8000
# open http://localhost:8000

# Option 2: VS Code
# Install the "Live Server" extension, right-click index.html > Open with Live Server
```

You can also just double-click `index.html` (the installable-app part needs http/https).

## 🌐 Deploy (free)

**GitHub Pages:** Settings > Pages > Deploy from a branch > `main` > `/ (root)` > Save.

**Vercel:** vercel.com > Add New > Project > Import this repo > Framework preset: *Other* > Deploy.

**Netlify:** drag and drop the project folder at app.netlify.com/drop.

## 📁 Project structure

```
index.html      page structure
style.css       styles (dark + light theme)
script.js       all logic and the chapter list
manifest.json   PWA manifest
sw.js           service worker (offline support)
icon.svg        app icon
```

## 🔒 Privacy

All your data is saved **only in your own browser** (localStorage). Nothing is sent to any server. Use the Backup button to move data between devices.

## 🛠 Customize

Chapter lists are at the top of `script.js` (object `D`). Add or remove chapters there, for example when the NTA syllabus changes.

## 🤝 Contributing

Pull requests and suggestions are welcome: syllabus corrections, new features (PYQ tracker, charts), translations.

## 📄 License

MIT License. Free to use, modify and share. See `LICENSE`.

---

⭐ If this helped your NEET preparation, star the repo and share it with friends. **All the best! 🩺**
