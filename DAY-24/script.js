// http://www.omdbapi.com/?i=tt3896198&apikey=4ef21b61     without title
// http://www.omdbapi.com/?t=dhurandhar&apikey=4ef21b61     with movie title search

const ApiKey = "4ef21b61";

const moviePoster = document.getElementById("movie-poster");
const movieTitle = document.getElementById("movie-title");
const moviePlot = document.getElementById("plot");

const searchText = document.getAnimations("input-box");
const searchBtn = document.getElementById("search-movie");
const movieBox = document.getElementById("movie-box");

function displayMovie(movie) {
    
}

function fetchMovies() {
  const search = searchText.value;
  const baseURL = `http://www.omdbapi.com/?t=${search}&apikey=${ApiKey}`;
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      displayMovie(data);
    });
}

searchBtn.addEventListener("click", fetchMovies);
fetchMovies();

// const div = document.createElement("div");
// div.innerHTML = `<div class="card" style="width: 18rem">
//         <div class="card-body">
//           <img src=${movie.Poster} class="card-img-top" alt="..." id="movie-poster" />
//           <h5 class="card-title">${movie.Title}</h5>
//           <p class="card-text">${movie.plot}</p>
//         </div>
//       </div>
//     </div>`;
// console.log(div);
