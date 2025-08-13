const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzU5ZjNiNTViMTU3NmIyNjU2YTM5ZmU1Y2I2OGU3NyIsIm5iZiI6MTc1NTA3ODk1NC44NTYsInN1YiI6IjY4OWM2MTJhYzI3YmIzNjk4YmI3MGJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bd-DaX8WFX5unOMH8oKfBDids-BnSVWWT1_e7NszgFA'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));