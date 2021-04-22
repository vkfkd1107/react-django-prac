import axios from 'axios';
const API = axios.create();

// api.js 는 순수 데이터 crud만 시행한다. 
// then()과 같은 실행 후 화면 렌더링 문제는 font단에서 처리하도록 함

// post: create
// get: read
// put: update
// delete: delete

export const MovieList = () => API.get("/movie/");
export const MovieCreate = ((title, genre, year) => API.post("/movie/", {
    title: title,
    genre: genre,
    year: year
}));
export const MovieDelete = ((id) => API.delete(`/movie/${id}`));