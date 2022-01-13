import React from 'react'
import { GridMovies } from './components/gridMovies/index'
import './styles/reset.css'
import { Container, Row } from './components/utilities/grid'
import './styles/globalStyles.css'


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

