import React, {useState, useEffect } from 'react'
import { Col } from '../../styles/grid'
import { getImage } from '../../services/apiFunctions'
import './style.css'

export function CardMovies(props) {
    const { movie, width, minWidth } = props;
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
        setMovieInfo(movie)
    }, [movie]);

    return (
        <>
            <Col width={width} minWidth={minWidth}>
                <div className='card-wrap'>
                    <div>{movie.title}</div>
                    <div className='card-image'>
                        <img src={getImage(movie.poster_path)} alt={movie.title} />
                    </div>
                </div>
            </Col>
        </>
    );
}

