import axios from 'axios';
const API = axios.create();

// api.js 는 순수 데이터 crud만 시행한다. 
// then()과 같은 실행 후 화면 렌더링 문제는 font단에서 처리하도록 함

// post: create
// get: read
// put: update
// delete: delete
// patch: 특정값 수정

export const MovieList = () => API.get("/movie/");

export const MovieCreate = ((title, genre, year) => API.post("/movie/", {
    title: title,
    genre: genre,
    year: year
}));

export const MovieDelete = ((id) => API.delete(`/movie/${id}`));
export const MovieGet = ((id) => API.get(`/movie/${id}`));
export const MovieEdit = ((id,title, genre, year) => API.put(`/movie/${id}/`, {
    title: title,
    genre: genre,
    year: year
}));

export const MovieData = () => axios({
    method: 'post',
    url: '/movie/movie_data/',
    data: {
        name: '마녀',
        number: '1'
    }
});


// 여러값에 대한 parameter 전달
// 예시) `/api/beers/add/${name}/${country}/${color}/${alcoholPercent}`