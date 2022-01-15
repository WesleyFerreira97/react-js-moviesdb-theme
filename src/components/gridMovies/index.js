import React, {useState, useEffect } from 'react'
import { getPopularMovies } from '../../services/apiFunctions'
import { CardMovies } from '../../components/cardMovies/index'
import { SectionTitle } from './styles';
import { GridCols } from '../utilities/grid';



export function GridMovies(title, listMovies) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setMovies(data));
    }, []);

    return (
        <>
            <SectionTitle>Popular Movies</SectionTitle>
            
            <GridCols xs={210} gap={'1.5rem'}>
            {movies.map((movie, index) => (
                <CardMovies key={index} movie={movie} />
            ))}   
            </GridCols>
        </>
    )
}

