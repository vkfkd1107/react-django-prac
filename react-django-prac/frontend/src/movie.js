import React, {useState, useEffect, Fragment} from 'react';
import {MovieList, MovieCreate, MovieDelete, MovieGet, MovieEdit} from './api';
import Modal from 'react-modal';
import { render } from 'react-dom';
import axios from 'axios';

Modal.setAppElement('#root');

const Movie = () => {
    const [Movie, setMovie] = useState([])
    const [Isloading, setIsloading] = useState(false);

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState(2021);    

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [activeMovie, setActiveMovie] = React.useState([]);

    const [editId, setEditId] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editGenre, setEditGenre] = useState('');
    const [editYear, setEditYear] = useState('');


    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }


    const axiosMovieList = async () => {
        try {
            const movie = await MovieList()
            // console.log(movie.data)
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

    const handerEditMovie = async () => {
        try {
            setIsloading(true);
            const editlog = await MovieEdit(editId, editTitle, editGenre, editYear);
        } catch(err) {
            alert(err)
        }
        setIsloading(false);
        closeModal();
    }

    const DeleteMovie = async (movie_id) => {
        try {
            setIsloading(true);
            const deletelog = await MovieDelete(movie_id);
        } catch(err) {
            alert(err)
        }
        setIsloading(false)
    }

    // 특정 id를 받으면 그 id를 기반으로 object를 get요청으로 불러온다
    const MovieIdtoObj = async (id) => {
        try {
            const obj = await MovieGet(id);
            // setActiveMovie(obj.data);
            setEditId(obj.data.id);
            setEditTitle(obj.data.title);
            setEditGenre(obj.data.genre);
            setEditYear(obj.data.year);

            openModal();
            // OpenEditModal()
        }catch(err) {
            alert(err)
        }
    }

    const renderMovieList = () =>      
        Movie.map(movie => (
            <li key={movie.id}>
                <h2>{movie.title}, {movie.genre}, {movie.year}, id: {movie.id}</h2>
                {/* <button onClick={() => OpenEditModal(movie.id)}>Edit</button> */}                
                <button onClick={openModal}>Open Modal</button>
                <button onClick={() => MovieIdtoObj(movie.id)}>Edit</button>
                <button onClick={() => DeleteMovie(movie.id)}>Delete</button>
            </li>
        ));

    // const handleChangeTitle = () => 
    //     setActiveMovie();

    const renderEditModal = () =>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >

            <h1>**Modal**</h1>
            <div>
                <h1>Title: {editTitle}</h1>
                <input type="text" value={editTitle} placeholder={editTitle} onChange={(e) => {
                    setEditTitle(e.target.value);
                }} />
                <h1>Genre: {editGenre}</h1>
                <input type="text" value={editGenre} placeholder={editGenre} onChange={(e) => {
                    setEditGenre(e.target.value);
                }} />            
                <h1>Year: {editYear}</h1>            
                <input type="text" value={editYear} placeholder={editYear} onChange={(e) => {
                    setEditYear(e.target.value);
                }} />               
                <button onClick = {handerEditMovie}>Edit</button>
            </div>
            <button onClick={closeModal}>&times;</button>
        </Modal>        

    useEffect(() => {
        axiosMovieList();
        renderMovieList();
    }, [Isloading])

    return (
        <Fragment>
            {/* ---------------------------Movie List--------------------------- */}
            {renderMovieList()}
            {/* ---------------------------Insert Movie Data--------------------------- */}
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
            {/* ---------------------------Modal--------------------------- */}
            {renderEditModal()}
        </Fragment>
    );
}

export default Movie
