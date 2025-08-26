
export const TMDB_CONFIG = {
    API_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.REACT_APP_TMDB_API_KEY,
    headers: {

        accepting: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_MOVIE_API_KEY}`,
    }


}


//////Featching all movies
const fetchMovies = async ({ query }: { query: string }) => {

    const endPoint = query
        ? `${TMDB_CONFIG.API_URL}/search/movie?query=${query}`
        : `${TMDB_CONFIG.API_URL}/discover/movie?sort_by=popularity.desc`

    const responce = await fetch(endPoint, {
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


///////Featching a single movie destails
export const fetchMovieDetails = async (tmdbId: string) => {
    // console.log("TMDB ID:", tmdbId);
    try {
        const response = await fetch(
            `${TMDB_CONFIG.API_URL}/movie/${tmdbId}?api_key=${TMDB_CONFIG.API_KEY}`,
            {
                method: "GET",
                headers: TMDB_CONFIG.headers,
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch movie details");
        }

        const movieDetails = await response.json();
        console.log(movieDetails);
        return movieDetails;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};




