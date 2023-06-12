import React from "react";
import "./homepage.styles.css";

import request from "../../data/requests.js";
import Row from "../../components/Row/Row.component.jsx";
import Banner from"../../components/Banner/Banner.component.jsx";
import Navbar from "../../components/Navbar/Navbar.component.jsx";

const Homepage = () => 
{
    return(
        <div>
            <Banner />
            <Navbar />
            <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={request.fetchNetflixOriginals} />
            <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
            <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
            <Row title="SciFi Movies" fetchUrl={request.fetchScifiMovies} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Romantic Movies" fetchUrl={request.fetchRomanticMovies} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            <Row title="Documentries" fetchUrl={request.fetchDocumentries} />
        </div>
    );
};

export default Homepage;