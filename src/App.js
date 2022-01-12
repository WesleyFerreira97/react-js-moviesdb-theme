import React from 'react'
import { GridMovies } from './components/gridMovies/index'
import './styles/reset.css'
import { Grid, Row, Col } from './styles/grid'




function App() {

  return (
    <>
      <Grid>
        <Row width="80%">
          <GridMovies />
        </Row>
      </Grid>
    </>
  );
}

export default App;

