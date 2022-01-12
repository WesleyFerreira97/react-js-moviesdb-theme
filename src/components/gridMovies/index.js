import React, {useState, useEffect} from 'react'
import { getPopularMovies } from '../../services/apiFunctions'
import { CardMovies } from '../../components/cardMovies/index'
import { GridCols } from '../../styles/grid';
import { Grid } from '../grid/GridCols';

export function GridMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setMovies(data));
    }, []);

    return (
        <>
        <Grid xs={2} sm={2} lg={5}>
         {movies.map((movie, index) => (
             <CardMovies key={index} movie={movie} />
         ))}   
         </Grid>
        </>
    )
}
