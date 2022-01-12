import React from 'react'
import { GridMovies } from './components/gridMovies/index'
import './styles/reset.css'
import { Container, Row, Col } from './styles/grid'




function App() {

  return (
    <>
      <Container>
        <Row width="80%">
          <GridMovies />
        </Row>
      </Container>
    </>
  );
}

export default App;

