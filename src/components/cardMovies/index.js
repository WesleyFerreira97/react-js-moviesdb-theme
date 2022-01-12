import React, {useState, useEffect } from 'react'
import { getPopularMovies } from '../../services/apiFunctions'
import { Col } from '../../styles/grid'

export function CardMovies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPopularMovies().then(data => setMovies(data));
    }, [])

    return (
        <>
            <div>
                {movies.map((movie, index) => ( 
                    <Col key={index} width="100%" minWidth="150px" height="0">
                        <div key={index}>{movie.title}</div>
                    </Col>
                ))}    
            </div>
        </>
    );
}

