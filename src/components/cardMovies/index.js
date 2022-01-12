import React, {useState, useEffect } from 'react'
import { getImage } from '../../services/apiFunctions'
import './style.css'

export function CardMovies(props) {
    const { movie } = props;
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
        setMovieInfo(movie)
    }, [movie]);

    return (
        <div className='card-wrap'>
            <div>{movie.title}</div>
            <div className='card-image'>
                <img src={getImage(movie.poster_path)} alt={movie.title} />
            </div>
        </div>
    );
}

