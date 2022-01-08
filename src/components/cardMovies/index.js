import React, {useState, useEffect} from 'react'
import { getPopularMovies } from '../../services/apiFunctions'

export function CardMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setMovies(data));
    }, [])

    return (
        <>
            {console.log(movies)}
            {movies.map((movie, index) => ( <li key={index}>{movie.title}</li>))}    
        </>
    );
}
 