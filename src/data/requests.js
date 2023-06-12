const TMDB_API = '07800d8e59ceffad57c2508e27a95b0e';

// original requests - https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API}&with_genres=878

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API}&with_networks=213`,
    fetchTopRated: `/discover/tv?api_key=${TMDB_API}&with_networks=213&sort_by=vote_average.desc%26vote_count.gte=10`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=10749`,
    fetchScifiMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=878`,
    fetchDocumentries: `/discover/movie?api_key=${TMDB_API}&with_genres=99`,
};

export default requests;
