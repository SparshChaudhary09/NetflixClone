import React, {useState} from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.styles.css";

import axiosInstance from "../../data/axios.js";

const base_Url = "http://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    React.useEffect(()=> {
        const fetchData = async ()=> {
            const request = await axiosInstance.get(fetchUrl);
            setMovies(request.data.results); 
        }

        fetchData();

    }, [fetchUrl]);

    // console.table(movies);
 
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if(trailerUrl)
            setTrailerUrl('');
        else
        {
            movieTrailer(null, {tmdbId: movie.id})
            .then((url) => {
                // https://www.youtube.com/watch?v=jNUYEHKB34K; Random Youtube video url
                // new Url(url).search returns everthing after in search field which is after ?
                // new URLSearchParams allows us to get search field based on params like here v
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v')); // we are getting v params of url
            })
            .catch(error => console.log(error));
        }
    }
    
    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row-posters">
            {
                movies.map(movie => (
                    <img 
                    className={`row-poster ${isLargeRow && "row-poster-large"}`} 
                    onClick={()=> handleClick(movie)}
                    key={movie.id} 
                    src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))
            }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
};

export default Row;