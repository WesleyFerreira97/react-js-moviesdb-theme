import React, {useState, useEffect, useContext} from 'react'
import { getPopularMovies } from '../../services/apiFunctions'
import { CardMovies } from '../../components/cardMovies/index'
import { GridCols } from '../utilities/grid';
import { ThemeColors } from '../../App';
import { SectionTitle } from './styles';



export function GridMovies() {
    const [movies, setMovies] = useState([]);
    const colors = useContext(ThemeColors);
    console.log(colors.background);

    useEffect(() => {
        getPopularMovies().then(data => setMovies(data));
    }, []);

    return (
        <>
        <SectionTitle>Popular Movies</SectionTitle>
        <h1 className='section-title title-xl'>Opening This Week</h1>
        <GridCols xs={200} gap={'2rem'}>
         {movies.map((movie, index) => (
             <CardMovies key={index} movie={movie} />
         ))}   
         </GridCols>
        </>
    )
}

