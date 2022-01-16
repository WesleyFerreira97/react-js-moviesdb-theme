import React from 'react'
import { CardMovies } from '../../components/cardMovies/index'
import { GridCols } from '../utilities/grid';

export function GridMovies(props) {
    const { listMovies } = props;

    return (
        <>
            <GridCols xs={210} gap={'1.5rem'}>
                {listMovies.map((movie, index) => (
                    <CardMovies key={index} movie={movie} />
                ))}   
            </GridCols>
        </>
    )
}

