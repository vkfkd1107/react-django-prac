import axios from 'axios';
const API = axios.create();

export const MovieList = () => API.get("/movie/");
export const MovieCreate = ((title, genre, year) => API.post("/movie/", {
    title: title,
    genre: genre,
    year: year
}));