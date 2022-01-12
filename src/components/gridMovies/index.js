import React, {useState, useEffect} from 'react'
import { getPopularMovies } from '../../services/apiFunctions'
import { CardMovies } from '../../components/cardMovies/index'

export function GridMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setMovies(data));
    }, []);

    return (
        <>
         {movies.map((movie, index) => (
             <CardMovies key={index} movie={movie} width="25%" minWidth="150px" />
         ))}   
        </>
    )
}
