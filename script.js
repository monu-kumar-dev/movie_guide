const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const inputBox = document.querySelector(".inputBox");
const resetBtn = document.querySelector(".reset");

// function to fetch movie details using OMDB API
const getMovieInfo = async (movie) => {
  try {
    const myApiKey = "15becb66";
    const url = `https://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      showErrorMessage(data.Error);
      return;
    }
    resetBtn.style.display = "flex";

    // console.log(data);
    showMovieData(data);
  } catch (error) {
    showErrorMessage("Something went wrong. Try again!");
  }
};

// function to show movie data on screen
const showMovieData = (data) => {
  movieContainer.innerHTML = "";
  movieContainer.classList.remove("noBackground");
  // use Destructuring assignment to extract properties from data object
  const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } =
    data;

  const movieElement = document.createElement("div");
  movieElement.classList.add("movie-info");

  movieElement.innerHTML = `
  <h2> <strong>Title:</strong>${Title}</h2>
  <p> <strong>Rating: &#11088</strong>${imdbRating}</p>`;

  const movieGenreElement = document.createElement("div");
  movieGenreElement.classList.add("movie-genre");

  Genre.split(",").forEach((element) => {
    const p = document.createElement("p");
    p.innerText = element;
    movieGenreElement.appendChild(p);
  });

  //  genre inside movie card
  movieElement.appendChild(movieGenreElement);

  movieElement.innerHTML += `<p> <strong>Released Date:</strong>${Released}</p>
  <p> <strong>Duration: </strong>${Runtime}</p>
  <p> <strong>Cast: </strong>${Actors}</p>
  <p> <strong>Plot: </strong>${Plot}</p>`;

  // creating a div for movie poster
  const moviePosterElement = document.createElement("div");
  moviePosterElement.classList.add("movie-poster");

  const posterSrc = Poster !== "N/A" ? Poster : "./no-poster.png";
  moviePosterElement.innerHTML = `<img src="${posterSrc}" alt="${Title}">`;

  movieContainer.appendChild(moviePosterElement);
  movieContainer.appendChild(movieElement);
};

// Function to display error message
const showErrorMessage = (message) => {
  movieContainer.innerHTML = `<h2>${message}</h2>`;
  movieContainer.classList.add("noBackground");
  resetBtn.style.display = "none";
};

// function to handle form submisson
const formHandleSubmisson = (e) => {
  e.preventDefault();
  //   console.log(inputBox.value);
  const movieName = inputBox.value.trim();
  if (movieName !== "") {
    getMovieInfo(movieName);
  } else {
    showErrorMessage("Enter Movie name to get movie information");
    resetBtn.style.display = "none";
  }
};

// Adding event listner to search form
searchForm.addEventListener("submit", formHandleSubmisson);
inputBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    formHandleSubmisson();
  }
});

// resetBtn
resetBtn.addEventListener("click", () => {
  movieContainer.innerHTML = "";
  resetBtn.style.display = "none";
  inputBox.value = "";
  const heading = document.createElement("h2");
  heading.innerText = "Search Movie Details Here";

  movieContainer.appendChild(heading);
  movieContainer.classList.add("noBackground");
});
