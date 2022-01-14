import React from 'react'
import { Container, Row } from '../components/utilities/grid'
import { GridMovies } from '../components/gridMovies/index'


export function Home() {
    return (
        <>
        <Container bg={'0F1021'}>
            <Row width="80%">
                <GridMovies />
            </Row>
        </Container>
        </>
    )
}

