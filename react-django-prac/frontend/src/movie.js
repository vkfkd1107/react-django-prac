import React, {useState, useEffect, Fragment} from 'react';
import {MovieList, MovieCreate} from './api';
import { render } from 'react-dom';
import axios from 'axios';

const Movie = () => {
    const [Movie, setMovie] = useState([])
    const [Isloading, setIsloading] = useState(false);

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState(2021);

    const axiosMovieList = async () => {
        try {
            const movie = await MovieList()
            console.log(movie.data)
            setMovie(movie.data)
        }catch (err){
            alert(err)
        }
    }

    const handerPushedMovie = async () => {
        try {
            setIsloading(true);
            const createlog = await MovieCreate(title, genre, year);
        } catch(err) {
            alert(err)
        }
        setIsloading(false);
    }

    const renderMovieList = () =>
        Movie.map(movie => (
            <h2>{movie.title}, {movie.genre}, {movie.year}</h2>
        ))

    useEffect(() => {
        axiosMovieList();
        renderMovieList();
    }, [Isloading])

    return (
        <Fragment>
            {renderMovieList()}
            <div>
                <input type="text" value={title} placeholder="title" onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <input type="text" value={genre} placeholder="genre" onChange={(e) => {
                    setGenre(e.target.value);
                }} />
                <input type="text" value={year} placeholder="year" onChange={(e) => {
                    setYear(e.target.value);
                }} />
                <button onClick={handerPushedMovie}>Add</button>
            </div>
        </Fragment>
    )
}

export default Movie