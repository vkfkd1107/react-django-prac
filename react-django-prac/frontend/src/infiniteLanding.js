import React, {useState, useEffect, Fragment} from 'react';
import { render } from 'react-dom';
import {MovieLoad} from './api';
import axios from 'axios';

const InfiniteLanding = () => {
    const [page, setPage] = useState(1);
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
        if (scrollHeight - innerHeight - scrollTop < 300) {
            // console("Almost Bottom Of This Browser");
            setPage(prev => prev+1);
            axiosMovieList()
        }
    }    

    const axiosMovieList = async () => {
        try {
            const movie = await MovieLoad(page)
            // setMovie(movie.data.results);
            setMovie((prev) => [...prev, ...movie.data.results]);
            setIsloading(true);
        } catch (err) {
            alert(err);
        }
    }

    const renderMovieList = () => 
        Movie.map(movie => (
            <li key={movie.id}>
                <h1>--Title--</h1>
                <h2>{movie.title}</h2>
                <h1>--Genre--</h1>
                <h2>{movie.genre}</h2>
                <h1>--Year--</h1>
                <h2>{movie.year}</h2>
                <h1>--Movie_id--</h1>
                <h2>{movie.id}</h2>
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