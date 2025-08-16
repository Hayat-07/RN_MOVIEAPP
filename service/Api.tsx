
export const TMDB_CONFIG = {
    API_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.REACT_APP_TMDB_API_KEY,
    headers: {
        
        accepting: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_MOVIE_API_KEY}`,
    }
       
        
    }



const fetchMovies = async ({ query }: { query: string }) => {

    const endPoint = query
        ? `${TMDB_CONFIG.API_URL}/search/movie?query=${query}`
        : `${TMDB_CONFIG.API_URL}/discover/movie?sort_by=popularity.desc`

    const responce = await fetch( endPoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if (!responce.ok) {
        throw new Error('Failed to fetch popular movies');
    }

    const data = await responce.json();
    // console.log(data);
    return data.results;
};
export default fetchMovies;







// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzU5ZjNiNTViMTU3NmIyNjU2YTM5ZmU1Y2I2OGU3NyIsIm5iZiI6MTc1NTA3ODk1NC44NTYsInN1YiI6IjY4OWM2MTJhYzI3YmIzNjk4YmI3MGJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bd-DaX8WFX5unOMH8oKfBDids-BnSVWWT1_e7NszgFA'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));