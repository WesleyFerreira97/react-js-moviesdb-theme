import React from 'react'
import { CardMovies } from './components/cardMovies/index'
import './styles/reset.css'
import { Grid, Row, Col } from './styles/grid'




function App() {

  return (
    <>
      <Grid>
        <Row width="80%">
          <CardMovies />
        </Row>
      </Grid>
    </>
  );
}

export default App;

