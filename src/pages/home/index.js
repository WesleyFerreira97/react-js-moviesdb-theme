import React, { useEffect, useState} from 'react'
import { Container, Row } from '../../components/utilities/grid'
import { GridMovies } from '../../components/gridMovies/index'
import { SectionTitle } from './styles'
import { getPopularMovies } from '../../services/apiFunctions'


export function Home() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(data => setPopularMovies(data));
    }, []);
    
    return (
        <>
        <Container bg={'0F1021'}>
            <Row width="80%">
                <SectionTitle>Popular Movies</SectionTitle>
                <GridMovies listMovies={popularMovies} />
                
            </Row>
        </Container>
        </>
    )
}

