const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const inputBox = document.querySelector(".inputBox");

// function to fetch movie details using OMDB API
const getMovieInfo = async (movie) => {
  const myApiKey = "15becb66";
  const url = `https://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
};

// Adding event listner to search form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(inputBox.value);
  const movieName = inputBox.value.trim();
  if (movieName !== "") {
    getMovieInfo(movieName);
  }
});
 