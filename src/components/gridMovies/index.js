import React, {useState, useEffect} from 'react'
import { getPopularMovies } from '../../services/apiFunctions'
import { CardMovies } from '../../components/cardMovies/index'
import { GridCols } from '../../styles/grid';
import './style.css'

export function GridMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setMovies(data));
    }, []);

    return (
        <>
        <h1 className='section-title'>Opening This Week</h1>
        <GridCols xs={200} gap={'2rem'}>
         {movies.map((movie, index) => (
             <CardMovies key={index} movie={movie} />
         ))}   
         </GridCols>
        </>
    )
}

