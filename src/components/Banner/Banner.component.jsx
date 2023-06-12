import React from "react";
import "./Banner.styles.css";

import axios from "../../data/axios.js";
import requests from "../../data/requests.js";

const Banner = () => {
    const base_Url = "http://image.tmdb.org/t/p/original/";
    const [movie, setMovie] = React.useState({});

    React.useEffect(()=> {
        const fetchData = async() => {
            const req = await axios.get(requests.fetchNetflixOriginals);
            const randomMovie = req.data.results[Math.floor(Math.random() * req.data.results.length - 1)];
            setMovie(randomMovie);
            return req;
        }

        fetchData();

    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + "..." : str;
    }

    return(
        <header className="banner"
            style={{
                backgroundImage: `url(${base_Url}${movie.backdrop_path})`,
            }}
        >
            <div className="banner-content">
                <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner-fade-bottom" />
        </header>
    );
}

export default Banner;