import React, { useEffect, useState } from 'react'
import { Container, Row } from '../../components/utilities/grid'
import { GridMovies } from '../../components/gridMovies/index'
import { SectionTitle } from './styles'
import { getPopularMovies } from '../../services/apiFunctions'
import { MoviesFilter } from '../../components/moviesFilter/index'
import { MainContent } from '../../components/mainContent/index'

export function Home() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setPopularMovies(data));
    }, []);
    
    return (
        <>
        <MainContent />
        <Container bg={'0F1021'}>
            <Row width="80%">
                <SectionTitle>Popular Movies</SectionTitle>
                <MoviesFilter />
                <GridMovies listMovies={popularMovies} />
            </Row>
        </Container>
        </>
    )
}
