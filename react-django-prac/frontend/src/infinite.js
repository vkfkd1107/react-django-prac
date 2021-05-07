import React, {Fragment, useEffect, useState} from 'react'
import {MovieLoad} from './api'

const Infinite = () => {
    const [page, setPage] = useState(1);
    const [Movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleScroll = (event) => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||document.body.scrollTop;
      // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
        if (scrollHeight - innerHeight - scrollTop < 600) {
            console.log('bottom');
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        const loadMovie = async () => {
            setLoading(true);
            const newMovie = await MovieLoad(page);
            console.log(newMovie.data.results);
            setMovie((prev) => [...prev, ...newMovie.data.results])
            setLoading(false);
        };
        loadMovie();
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll)}
    })    

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
            <p>Loading ...</p>
        </Fragment>
    )
}

export default Infinite;