import React, {useState, useEffect, Fragment} from 'react';
import { render } from 'react-dom';
import {MovieList} from './api';
import axios from 'axios';

const InfiniteLanding = () => {
    const [Movie, setMovie] = useState([]);
    const [Isloading, setIsloading] = useState(false);

    useEffect(() => {
        axiosMovieList();
        renderMovieList();        
    }, [Isloading])

    useEffect(() => {
        window.addEventListener("scroll", infiniteScroll);
        return () => {window.removeEventListener('scroll', infiniteScroll)}
    })

    const infiniteScroll = () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||document.body.scrollTop;
      // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
        if (scrollHeight - innerHeight - scrollTop < 100) {
            console.log("Almost Bottom Of This Browser");
        }
    }    

    const axiosMovieList = async () => {
        try {
            const movie = await MovieList()
            setMovie(movie.data.results);
        } catch (err) {
            alert(err);
        }
    }

    const renderMovieList = () => 
        Movie.map(movie => (
            <li key={movie.id}>
                <h2>Title: {movie.title}</h2>
                <h2>Genre: {movie.genre}</h2>
                <h2>Year: {movie.year}</h2>
                <h2>Movie_id: {movie.id}</h2>
            </li>
        ));


    return (
        <Fragment>
            {renderMovieList()}
            <div className='add'></div>
        </Fragment>
    );
}

export default InfiniteLanding;