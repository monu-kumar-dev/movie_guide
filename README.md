# 🎬 Movie Guide App

A simple and responsive **Movie Guide Web Application** built using **HTML, CSS, and JavaScript**.  
This app allows users to search for movies and view detailed information fetched from the **OMDb API**.

---

## 🚀 Features

- 🔍 Search movies by title  
- 🎞️ Display movie details:
  - Title
  - IMDb Rating ⭐
  - Genre
  - Release Date
  - Duration
  - Cast
  - Plot summary
- 🖼️ Movie poster with fallback image support
- 🔁 Reset button to clear results and return to default state
- 📱 Fully responsive (Desktop, Tablet, Mobile)
- ⚠️ Proper error handling (movie not found, empty input)

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the app  
- **CSS3** – Styling & responsiveness (Flexbox + Media Queries)  
- **JavaScript (ES6)** – DOM manipulation, API handling  
- **OMDb API** – Movie data source  

---

## 📂 Project Structure

movie-guide-app/
│
├── index.html
├── style.css
├── script.js
├── no-poster.png (optional fallback image)
└── README.md


---

## ⚙️ How It Works

1. User enters a movie name in the search box
2. App fetches data from the OMDb API
3. Movie details are displayed dynamically
4. Reset button clears the result and restores the default UI

---

## ❗ Error Handling

- Shows message if:
  - Movie is not found
  - Input field is empty
  - API request fails
- Hides unnecessary UI elements during error state

---

## 🌐 API Used

- **OMDb API**
https://www.omdbapi.com/


> You need an API key to use this app.

---

## 📸 Screenshots (Optional)

_Add screenshots here to make your project more attractive._

---

## 📌 Future Improvements

- Add loading spinner
- Improve UI animations
- Search suggestions / autocomplete
- Dark mode
- Keyboard accessibility

---

## 👨‍💻 Author

**Monu Kumar**  
BCA Student | Frontend Developer  

---

## ⭐ Acknowledgements

- OMDb API for providing movie data
- Google Fonts for typography

---

## 📄 License

This project is open-source and available for learning purposes.
