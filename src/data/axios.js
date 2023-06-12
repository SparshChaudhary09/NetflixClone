import axios from "axios";

// This is the base url for requesting
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

// It will append the url with this request
// instance.get('/movie/bla-bla');

export default instance;