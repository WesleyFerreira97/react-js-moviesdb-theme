import React from 'react'
import { GridMovies } from './components/gridMovies/index'
import './styles/reset.css'
import { Container, Row, Col } from './styles/grid'
import './styles/typography.css'



function App() {

  return (
    <>
      <Container bg={'0F1021'}>
        <Row width="80%">
          <GridMovies />
        </Row>
      </Container>
    </>
  );
}

export default App;

