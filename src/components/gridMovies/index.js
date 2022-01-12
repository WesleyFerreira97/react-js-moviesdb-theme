import React, {useState, useEffect} from 'react'
import { getPopularMovies } from '../../services/apiFunctions'
import { CardMovies } from '../../components/cardMovies/index'
import { GridCols } from '../../styles/grid';

export function GridMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setMovies(data));
    }, []);

    return (
        <>
        <GridCols xs={250}>
         {movies.map((movie, index) => (
             <CardMovies key={index} movie={movie} />
         ))}   
         </GridCols>
        </>
    )
}

